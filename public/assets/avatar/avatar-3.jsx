export default function AvatarBadge({ src, height, onClick }) {
  if (!height) {
    height = "40px"
  }
  
  return (
    <button className="relative inline-flex items-center justify-center rounded gap-2"
      onClick={onClick}>
      <img
        src={src}
        alt="DS"
        title="user avatar"
        width={height}
        height={height}
        className="max-w-full border-2 border-white rounded-full"
      />
      <span className='absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-300 dark:bg-green-300 border-2 border-black dark:border-white'></span>
    </button>
  )
}