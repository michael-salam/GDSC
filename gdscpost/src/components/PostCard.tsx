import { formatDate } from "../utils/formatDate"

const PostCard = ({ name, profilePicture, time, content }: any) => {
  return (
    <div className='bg-white shadow-md rounded-lg p-4 mb-4'>
        <div className='flex items-center justify-between mb-2'>
            <div className='flex items-center gap-[7px]'>
                <img src={profilePicture} alt="Profile" className='w-10 h-10 rounded-full border-2 border-blue-600 mr-2' />
                <p className="font-semibold">{name}</p>
            </div>
            <p>{formatDate(time)}</p>
        </div>
        <div>{content}</div>
    </div>
  )
}

export default PostCard