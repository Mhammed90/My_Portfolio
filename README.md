# Mohamed Abdalkreem — Portfolio

A responsive React, TypeScript, and Tailwind CSS portfolio built with Vite.

## Run locally

Install Node.js, then run in PowerShell:

```powershell
npm.cmd install
npm.cmd run dev
```

Create a production build with `npm run build`.

## Personalize the portfolio

Update `src/data/portfolio.ts` to change the profile, education, social links, experience entries, project cards, competitive programming achievements, and platform links.

- **Photo:** put your image in `public/` and set `profile.photoPath` to its public path. For example, `public/my_Photo.jpeg` is available as `/my_Photo.jpeg`.
- **Email:** update `profile.email`.
- **LinkedIn:** update the LinkedIn URL in `socialLinks`.
- **Project repositories:** replace each project's `ADD_USERNAME/ADD_REPOSITORY` URL. Add projects by appending an entry to the `projects` array.
- **Resume:** put your actual PDF at `public/resume/Mohamed_Abdalkreem_CV.pdf`, or update `profile.resumePath` and `profile.resumeFilename` to match its location and download name. The PDF is intentionally not included.
- **Contact form:** the supplied Formspree endpoint is configured by default. In Formspree, set its destination email to `profile.email` and complete any email verification it requires. To override the endpoint, copy `.env.example` to `.env.local`, update `VITE_FORMSPREE_ENDPOINT`, and restart the dev server. Set the same variable in your deployment environment if you override it. The form shows confirmation only after Formspree accepts a submission.

The experience section describes technical work and learning only; it does not claim employment history.
