interface Props {
  icon: "edit" | "delete" | "close";
  disabled?: boolean;
  onClick: () => void;
}

const getIcon = (icon: "edit" | "delete" | "close") => {
  if (icon === "delete") {
    return "🗑";
  } else if (icon === "edit") {
    return "✎";
  } else if (icon === "close") {
    return "✕";
  }
};

const IconButton = ({ icon, disabled = false, onClick }: Props) => (
  <button
    className={`inline-flex items-center justify-center w-10 h-10 p-1 text-back-400 transition-colors duration-150 rounded-full focus:shadow-outline ${
      icon === "delete"
        ? "bg-red-200 hover:bg-red-400 active:bg-red-500"
        : "bg-gray-100 hover:bg-gray-200 active:bg-gray-300"
    }`}
    disabled={disabled}
    onClick={onClick}
  >
    {getIcon(icon)}
  </button>
);

export default IconButton;
