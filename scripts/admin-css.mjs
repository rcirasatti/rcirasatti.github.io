// The CMS preview reuses the site stylesheet, so copy it next to the admin page.
import { copyFileSync, mkdirSync } from 'node:fs';

mkdirSync('public/admin', { recursive: true });
copyFileSync('src/index.css', 'public/admin/site.css');
