export default function Loading() {
  return (
    <span aria-label="loading..." className="origin-center animate-spin">
      <svg
        width="36"
        height="36"
        viewBox="0 0 350 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M49 228C101.125 332.553 240.321 336.759 296 228"
          className="stroke-pink-500 dark:stroke-pink-400"
          strokeWidth="33"
        />
        <path
          d="M49 107L301 249"
          className="stroke-pink-500 dark:stroke-pink-400"
          strokeWidth="33"
        />
        <path
          d="M49 126C102.18 16.2191 244.194 11.8027 301 126"
          className="stroke-pink-500 dark:stroke-pink-400"
          strokeWidth="33"
        />
      </svg>
    </span>
  );
}
