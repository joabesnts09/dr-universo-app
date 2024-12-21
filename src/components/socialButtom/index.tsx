
interface SocialButtonProps {
  href: string;
  icon: JSX.Element;
  text: string;
  className: string;
}
export const SocialButton = ({ href, icon, text, className }: SocialButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={` flex items-center justify-center px-4 py-2  text-white rounded-lg shadow-lg transition duration-300 ${className}`}
    >
      <span className="w-6 h-6 mr-2">{icon}</span>
      <p className='font-bold'>{text}</p>
    </a>
  );
};
