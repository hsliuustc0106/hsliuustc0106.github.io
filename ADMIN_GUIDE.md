# Admin Panel Guide

This guide explains how to use the admin panel to edit blogs directly on the website.

## Accessing the Admin Panel

1. Navigate to `/admin` on your website
2. Login with the following credentials:
   - Username: `admin`
   - Password: `password`

Note: In a production environment, you should change these credentials and implement proper authentication.

## Managing Blogs

### Viewing Blogs
After logging in, you'll see a list of all blogs on the dashboard. Each blog shows:
- Title
- Category
- Date and read time
- Featured status
- Primary tag

### Creating a New Blog
1. Click the "Create New Blog" button
2. A new blog will be added to the top of the list with placeholder content
3. Click "Edit" to modify the blog content

### Editing a Blog
1. Click the "Edit" button next to any blog
2. Modify any of the following fields:
   - Title
   - Slug (URL-friendly version of the title)
   - Category
   - Date
   - Read time
   - Excerpt (short description)
   - Content (full blog content in Markdown)
   - Tags
   - Featured status
   - Video URL (optional)
   - External link (optional)
3. Click "Save Changes" to save your edits

### Viewing a Blog
Click the "View" button to see how the blog will appear on the live site.

### Deleting a Blog
Click the "Delete" button to remove a blog. You'll be prompted to confirm the deletion.

## Blog Content Format

The blog content editor supports Markdown. You can use standard Markdown syntax for formatting:

- Headers: `# H1`, `## H2`, `### H3`
- Bold: `**bold text**`
- Italic: `*italic text*`
- Lists: `- item` (unordered) or `1. item` (ordered)
- Code blocks: Wrap code in triple backticks (```)
- Links: `[link text](URL)`

## Technical Implementation

The admin panel uses a simple authentication system and interacts with blog files through API routes:

- `/src/app/api/blogs/route.ts` - API routes for blog management
- `/src/app/admin/page.tsx` - Admin dashboard
- `/src/app/admin/blogs/page.tsx` - Blog editor

In a production environment, you would want to:

1. Implement proper user authentication (OAuth, JWT, etc.)
2. Add database storage instead of file-based storage
3. Implement proper error handling and validation
4. Add user roles and permissions
5. Improve the security of the authentication system

## Deploying Changes

After making changes through the admin panel:
1. The changes are saved to the file system
2. If you're using Git, commit and push the changes
3. Your hosting platform (GitHub Pages, Vercel, etc.) will automatically deploy the updates

## Troubleshooting

If you encounter issues:

1. Make sure you're using the correct login credentials
2. Check the browser console for error messages
3. Verify that the API routes are working correctly
4. Ensure file permissions are set correctly on your server

For additional help, check the Next.js documentation on API routes and file-based routing.