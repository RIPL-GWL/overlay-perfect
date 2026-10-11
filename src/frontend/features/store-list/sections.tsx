import { useMemo, useState } from "react";
import { MapPin, Search, Store } from "lucide-react";
import { retailNetwork } from "@/frontend/data/retail-network";
import type { NetworkSelection } from "@/frontend/components/retail-network-indicator";

export function StoreList({ initial }: { initial: NetworkSelection }) {
  const [selection, setSelection] = useState(initial);
  const states = useMemo(() => [...new Set(retailNetwork.map((r) => r.state))].sort(), []);
  const areas = useMemo(() => [...new Set(retailNetwork.filter((r) => !selection.state || r.state === selection.state).map((r) => r.area))].sort(), [selection.state]);
  const districts = useMemo(() => [...new Set(retailNetwork.filter((r) => (!selection.state || r.state === selection.state) && (!selection.area || r.area === selection.area)).map((r) => r.district))].sort(), [selection]);
  const rows = retailNetwork.filter((r) => (!selection.state || r.state === selection.state) && (!selection.area || r.area === selection.area) && (!selection.district || r.district === selection.district));
  const total = rows.reduce((sum, row) => sum + row.stores, 0);
  return <>
    <section className="cinematic-section border-b border-border bg-ink text-ink-foreground"><div className="page-shell"><p className="royal-label">Retail Network Directory</p><h1 className="mt-6 max-w-4xl text-4xl sm:text-6xl">Find our network by <span className="text-accent-foreground">location</span></h1><p className="mt-5 max-w-2xl leading-7 text-ink-foreground/70">Browse verified district-level network totals from the supplied store master. Individual store contacts will appear when approved store-level records are supplied.</p></div></section>
    <section className="page-shell py-10 sm:py-16"><div className="grid gap-3 border-y border-border py-5 sm:grid-cols-3">{[
      ["State", selection.state, states, (value:string)=>setSelection({state:value,area:"",district:""})],
      ["Area", selection.area, areas, (value:string)=>setSelection({...selection,area:value,district:""})],
      ["District", selection.district, districts, (value:string)=>setSelection({...selection,district:value})],
    ].map(([label,value,options,onChange])=><label key={String(label)} className="text-xs font-semibold uppercase text-muted-foreground">{String(label)}<select value={String(value)} onChange={(e)=>{ if(typeof onChange === "function") onChange(e.target.value); }} className="mt-2 h-12 w-full border border-input bg-background px-3 text-base normal-case text-foreground"><option value="">All {String(label).toLowerCase()}s</option>{(options as string[]).map((o)=><option key={o}>{o}</option>)}</select></label>)}</div>
      <div className="mt-8 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4"><div className="min-w-0"><p className="flex items-center gap-2 text-sm font-semibold"><Search className="size-4 text-primary"/>Matching districts</p><p className="mt-1 text-sm text-muted-foreground">{rows.length} districts in this selection</p></div><div className="shrink-0 border-l-2 border-primary pl-4 text-right"><p className="text-xs uppercase text-muted-foreground">Stores</p><p className="font-display text-3xl">{total.toLocaleString("en-IN")}</p></div></div>
      <div className="mt-8 overflow-x-auto border border-border"><table className="w-full min-w-[620px] text-left"><thead className="bg-secondary text-xs uppercase text-muted-foreground"><tr><th className="p-4">State</th><th className="p-4">Area</th><th className="p-4">District</th><th className="p-4 text-right">Stores</th></tr></thead><tbody>{rows.map((row)=><tr key={`${row.state}:${row.district}`} className="border-t border-border"><td className="p-4">{row.state}</td><td className="p-4 text-muted-foreground">{row.area}</td><td className="p-4"><span className="flex items-center gap-2"><MapPin className="size-4 text-primary"/>{row.district}</span></td><td className="p-4 text-right font-display text-lg">{row.stores ? row.stores.toLocaleString("en-IN") : "—"}</td></tr>)}</tbody></table></div>
      {!rows.length && <p className="py-12 text-center text-muted-foreground"><Store className="mx-auto mb-3 size-7"/>No matching district was found.</p>}
    </section>
  </>;
}
