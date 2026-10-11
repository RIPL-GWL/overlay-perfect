import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/frontend/components/ui/button';
import portraits from '@/assets/investor-portraits.jpg';
export function Portrait({index,name,large=false}:{index:number;name:string;large?:boolean}) { return <div className={`investor-portrait portrait-${index}${large?' portrait-large':''}`}><img src={portraits} alt={`${name} — sample investor portrait`} width={1536} height={1024} loading={large?'eager':'lazy'}/></div>; }
export function ContactButton({children='Connect with Investor',outline=false}:{children?:React.ReactNode;outline?:boolean}) { return <Button asChild variant={outline?'outline':'default'}><Link to='/contact'>{children}<ArrowRight/></Link></Button>; }
export function SectionHeading({children,eyebrow}:{children:React.ReactNode;eyebrow?:string}) { return <div className='investor-heading'>{eyebrow&&<p className='investor-eyebrow'>{eyebrow}</p>}<h2>{children}</h2></div>; }
