<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Preserve the imported TanStack file routes and frontend feature modules so existing URLs and site behavior remain compatible.
- Keep generated Cloud integration files and runtime configuration from the target project; never overwrite them with another project's bindings.
- Store enquiries in the Cloud leads table with insert-only public access; private enquiry reads stay privileged.
- Represent imported bitmap media with asset pointer modules so source imports retain their existing shape.
- Keep startup funding presentation in its own frontend feature module while reusing the funding enquiry form, so startup design changes do not alter business funding pages or enquiry storage.
- Keep Startup with RIPL presentation in a dedicated frontend feature module and direct application actions to the existing startup funding form, so community pages and enquiry storage remain unchanged.
- Keep Scale Your Startup in a dedicated frontend feature module with scoped presentation styles and existing contact/funding destinations, so other startup pages and enquiry handling remain compatible.
- Keep mobile startup photo-section overlay rules scoped to `.startup-page`, including founder sections, so presentation fixes never change other site pages.
