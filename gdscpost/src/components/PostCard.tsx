import { FaEdit, FaTrash } from "react-icons/fa"
import { formatDate } from "../utils/formatDate"
import PostForm from "./PostForm"
import { useState } from "react";

const PostCard = ({ id, name, profilePicture, time, content, owner = false }: any) => {
  const [isDisplayingEditPostForm, setIsDisplayingEditPostForm] = useState(false);
  return (
    <div className='bg-white shadow-md rounded-lg p-4 mb-4'>
        {isDisplayingEditPostForm && (
        <PostForm
          // setPosts={setPosts}
          id={id}
          setIsDisplayingPostForm={setIsDisplayingEditPostForm}
          edit={true}
        />
      )}
        <div className='flex items-center justify-between mb-2'>
            <div className='flex items-center gap-[7px]'>
                <img src={profilePicture} alt="Profile" className='w-10 h-10 rounded-full border-2 border-blue-600 mr-2' />
                <p className="font-semibold">{name}</p>
            </div>
            <div className="flex flex-col justify-between h-full">
              <p>{formatDate(time)}</p>
              {
                owner && 
                <div className="flex gap-[7px] self-end text-xl *:cursor-pointer">
                  <FaEdit className="text-blue-600" onClick={() => setIsDisplayingEditPostForm(true)}/>
                  <FaTrash className="text-red-600" />
                </div>
              }
            </div>
        </div>
        <div>{content}</div>
    </div>
  )
}

export default PostCard