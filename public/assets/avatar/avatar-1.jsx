export default function Avatar({ height, onClick }) {
  if (!height) {
    height = "40px"
  }
  return (
    <button className="relative inline-flex items-center justify-center rounded gap-2"
      onClick={onClick}>
      <img
        src="/DS_Avatar.png"
        alt="DS"
        title="user avatar"
        width={height}
        height={height}
        className="max-w-full border-2 border-white rounded-full"
      />
    </button>
  )
}
