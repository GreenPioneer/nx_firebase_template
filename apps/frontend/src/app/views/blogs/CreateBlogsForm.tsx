/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { UserContext } from '../../app';
import { createBlog, updateBlog } from '../../api-client/apiModules/blogs';

interface CreateBlogProps {
  addNewBlog: (value: any) => void;
  updateBlogList: (blogId: string, data: any) => void;
  setCreateBlogModal: (value: boolean) => void;
  editBlog: any;
}
export const CreateBlogsForm = (props: CreateBlogProps) => {
  const { user, setUser } = React.useContext(UserContext);

  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [blog, setBlog] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('');

  useEffect(() => {
    if (props.editBlog) {
      setTitle(props.editBlog.title || '');
      setDescription(props.editBlog.description || '');
      setBlog(props.editBlog.blog || '');
      setImageUrl(props.editBlog.imageUrl || '');
    }
  }, [props.editBlog]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(props.editBlog);
    try {
      const blogData = {
        title,
        description,
        blog,
        imageUrl,
        author: user.name,
        authorId: user.id,
      };
      if (props.editBlog?.id) {
        await updateBlog(props.editBlog.id, blogData);
        props.updateBlogList(props.editBlog.id, blogData);
      } else {
        const res = await createBlog(blogData);
        const newBlog = { ...blogData, id: res.id, date: res.date };
        props.addNewBlog(newBlog);
      }
    } catch (e) {
      console.log(e);
      alert('Error creating blog');
    }

    props.setCreateBlogModal(false);
  };

  return (
    <>
      {!user.id ? (
        <h3>Must Sign In to Create or Edit a Blog</h3>
      ) : (
        <form onSubmit={(e) => onSubmit(e)} className="relative">
          <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
            <label htmlFor="title" className="sr-only">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="block w-full border-0 pt-2.5 text-lg font-medium placeholder:text-gray-400 focus:ring-0"
              placeholder="Title"
            />
            <label htmlFor="description" className="sr-only">
              Blogpost
            </label>
            <textarea
              rows={8}
              name="blog"
              id="blog"
              className="block w-full resize-none border-0 py-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Share something with the world"
              defaultValue={''}
              value={blog}
              onChange={(e) => setBlog(e.target.value)}
            />
            <label htmlFor="description" className="sr-only">
              Blog
            </label>
            <input
              type="text"
              name="link-image"
              id="link-image"
              className="block border-gray-300 border-t border-b border-0 w-full resize-none py-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Add Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              defaultValue={''}
            />

            {/* Spacer element to match the height of the toolbar */}
            <div className="py-2" aria-hidden="true">
              {/* Matches height of button in toolbar (1px border + 36px content height) */}
              <div className="py-px">
                <div className="h-9" />
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
            <div className="flex items-center space-x-5">
              <div className="flex items-center">
                <button
                  type="button"
                  className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                >
                  {/* <PaperClipIcon className="h-5 w-5" aria-hidden="true" /> */}
                  <span className="sr-only">Attach a file</span>
                </button>
              </div>
            </div>

            <div className="flex-shrink-0">
              <button
                type="submit"
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};
