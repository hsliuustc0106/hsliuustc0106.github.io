# Blog Management System

This document explains how to manage blogs directly on the website using the admin panel.

## Overview

The blog management system allows you to:
- Create new blog posts
- Edit existing blog posts
- Delete blog posts
- Manage blog properties (title, category, tags, etc.)

## Accessing the Admin Panel

Navigate to `/admin` on your website and log in with:
- Username: `admin`
- Password: `password`

**Important:** Change these default credentials in production!

## Blog Management Features

### Creating a New Blog

1. Click "Create New Blog" on the admin dashboard
2. A new blog with placeholder content will be created
3. Click "Edit" to modify the content

### Editing a Blog

The blog editor allows you to modify:
- **Title**: The main heading of your blog post
- **Slug**: URL-friendly version of the title
- **Category**: Classification (AI4Science, LLM Serving, etc.)
- **Date**: Publication date
- **Read Time**: Estimated reading time
- **Excerpt**: Short description for the blog listing
- **Content**: Full blog content (supports Markdown)
- **Tags**: Comma-separated list of tags
- **Featured**: Whether to highlight the blog
- **Video URL**: Optional video link
- **External Link**: Optional external URL

### Saving Changes

Click "Save Changes" to save your edits. In a production environment, this would:
1. Update the blog's page component file
2. Update the main blogs listing page
3. Deploy the changes

### Viewing Blogs

Click "View" to see how your blog appears on the live site.

### Deleting Blogs

Click "Delete" and confirm to remove a blog post.

## Technical Implementation

### File Structure

```
src/
  app/
    admin/
      page.tsx          # Admin dashboard
      blogs/
        page.tsx        # Blog editor
        data.ts         # Blog data types and initial data
    api/
      blogs/
        route.ts        # API routes for blog management
    blogs/
      [slug]/
        page.tsx        # Individual blog pages
      page.tsx          # Blogs listing page
  lib/
    blogUtils.ts        # Utility functions for blog management
```

### API Endpoints

- `GET /api/blogs` - Retrieve all blogs
- `POST /api/blogs` - Create a new blog
- `PUT /api/blogs` - Update an existing blog
- `DELETE /api/blogs?slug=[slug]` - Delete a blog

### Data Flow

1. Admin makes changes in the editor
2. Changes are sent to the API route
3. API route generates new blog page component
4. Blog listing is updated
5. Files are saved to the filesystem

## Markdown Support

The blog content editor supports Markdown:

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Unordered list item
- Another item

1. Ordered list item
2. Another item

[Link text](https://example.com)

`inline code`

```
code block
```
```

## Production Considerations

For a production environment, you should:

1. **Implement proper authentication**
   - Use OAuth, JWT, or another secure authentication method
   - Add user roles and permissions

2. **Add database storage**
   - Replace file-based storage with a database
   - Add proper data validation and sanitization

3. **Improve error handling**
   - Add comprehensive error handling
   - Implement logging

4. **Add content validation**
   - Validate blog content before saving
   - Sanitize user input

5. **Implement versioning**
   - Add version control for blog posts
   - Allow reverting to previous versions

6. **Add media management**
   - Allow uploading and managing images
   - Add media library functionality

## Troubleshooting

Common issues and solutions:

1. **Login fails**
   - Check username/password
   - Verify authentication implementation

2. **Changes don't save**
   - Check file permissions
   - Verify API route functionality
   - Check browser console for errors

3. **Blog doesn't appear**
   - Verify the blog slug is correct
   - Check that the blog file was created
   - Verify the blogs listing was updated

4. **Formatting issues**
   - Check Markdown syntax
   - Verify content escaping

For additional help, refer to the Next.js documentation on:
- API routes
- File-based routing
- Server components