import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 150.919 34.775"
      {...props}
    >
      <g transform="translate(15.373 19.885)">
        <path
          fill="current"
          strokeWidth="0.32"
          d="M95.62 14.33c-.03-1.486-2.467-3.07-5.269-3.429-.88-.112-2.536-.343-3.68-.513-1.144-.17-2.565-.362-3.158-.426-1.726-.187-1.844-.886-.27-1.602 5.142-2.339 10.6-4.87 12.228-5.67 1.844-.905 1.87-.934.64-.719-.704.124-4.304.243-8 .266-4.094.026-7.47.203-8.64.453-2.093.447-4.29.388-4.407-.12-.04-.176.647-.355 1.527-.398 4.063-.197 8.824-1.814 9.91-3.364.825-1.179.625-2.628-.494-3.57-1.074-.903-1.899-1.016-3.45-.476-1.006.35-1.614 1.483-1.177 2.19.354.574-.147 1.058-.657.635-.908-.754-.275-2.863 1.038-3.461 1.027-.468 3.385-.454 4.439.027 1.637.745 2.268 3.293 1.148 4.634-.32.384-1.288 1.15-2.15 1.702l-1.567 1.005 6.625-.102c4.796-.074 6.735-.213 7.028-.506.226-.226.48-1.568.576-3.04.133-2.053.277-2.636.651-2.636.315 0 .517.385.586 1.12.059.614.256 1.298.44 1.52.233.28.225.4-.027.4-.197 0-.359.371-.359.824 0 .453-.373 1.929-.83 3.28-1.25 3.705-1.718 6.305-1.724 9.576-.005 2.416-.094 2.96-.486 2.96-.264 0-.485-.252-.491-.56zm.011-4.06c0-.78.219-2.4.486-3.6l.652-2.925c.216-.963.063-.914-5.728 1.848a2231.247 2231.247 0 01-5.749 2.734c-.67.316-1.102.678-.96.806.143.127 2.033.477 4.2.777 2.169.3 4.545.813 5.28 1.14.737.327 1.447.605 1.58.618.131.012.24-.617.24-1.398zm33.2-5.637c-.97-.579-.62-.783 1.34-.783 1.664 0 2.019-.115 2.88-.94 1.376-1.318 1.26-1.91-.54-2.759-2.695-1.27-3.6-2.114-3.6-3.357 0-1.42.755-2.161 2.922-2.864 2.801-.91 2.752-1.021-.711-1.615-.632-.108-1.741-.037-2.465.158-2.835.763-4.233 3.018-4.125 6.654.04 1.321-.073 2.047-.33 2.146-.618.237-.864-.45-1.077-2.998-.172-2.056-.315-2.476-1.064-3.12-.962-.828-2.874-.996-3.749-.33-.285.218-.897.954-1.36 1.635-.69 1.017-.84 1.605-.84 3.275 0 1.572-.107 2.035-.469 2.035-.452 0-.831-1.04-1.284-3.52-.406-2.226-1.513-4.769-2.301-5.285-1.05-.688-2.94-.678-4.418.022-1.082.514-3.049 2.701-3.049 3.391 0 .15.485.272 1.077.272 2.212 0 3.796 2.545 2.661 4.277-.963 1.47-1.512 1.803-2.965 1.803-1.261 0-1.494-.117-2.056-1.04-.693-1.137-.652-1.994.24-4.987 1.152-3.87 5.36-6.155 8.541-4.639 1.04.497 2.305 2.407 2.878 4.349.134.456.49.228 1.873-1.2 1.566-1.617 1.825-1.763 3.13-1.761 1.423 0 3.501.947 3.501 1.594 0 .63.49.307 1.27-.84 1.373-2.016 2.782-2.711 5.493-2.71 2.439 0 4.304.543 5.082 1.48.572.69.175.933-2.33 1.425-3.942.776-4.373 2.982-.893 4.57.802.365 1.71.88 2.018 1.142 1.128.96.479 2.862-1.36 3.987-1.07.654-3.226.947-3.92.533zM107.02 1.347c.745-.64.835-.901.65-1.888-.265-1.41-.846-1.926-2.019-1.792-.832.096-.893.198-.821 1.365.06.977-.01 1.175-.304.88-.591-.59-.894-.455-.894.4 0 .834 1.048 1.778 1.973 1.778.303 0 .94-.334 1.415-.743zm-93.151.89C11.665 1.072 11.285.67 10.825-.97c-.98-3.503.83-7.66 4.205-9.654.706-.416.921-.78.921-1.554 0-1.388.835-3.637 1.69-4.553 2.798-2.995 6.885-1.757 8.723 2.643.316.757.686 1.138 1.105 1.138 1.11 0 4.683 1.317 5.505 2.03 1.705 1.478 2.027 3.738.863 6.063-.854 1.704-2.477 3.427-3.229 3.427-.855 0-.698-.408.396-1.03 1.215-.693 2.54-3.433 2.544-5.266.003-1.157-.159-1.47-1.197-2.33-1.138-.94-3.673-1.934-4.938-1.934-.442 0-.584.25-.589 1.04-.021 3.13-3.6 6.628-6.793 6.639-.465.001-.56.299-.56 1.755 0 4.372-2.445 6.463-5.603 4.793zm3.267-.867c1.086-1.192 1.376-2.027 1.376-3.967 0-1.62-.106-1.933-.854-2.53-.726-.578-.845-.903-.797-2.172.057-1.503-.444-2.77-1.095-2.77-.607 0-3.012 2.576-3.504 3.753-.608 1.454-.609 4.97-.002 6.143.458.886 2.719 2.263 3.716 2.263.278 0 .8-.324 1.16-.72zm6.282-7.84c1.614-1.16 2.18-2.213 2.245-4.187l.05-1.493-1.238-.101c-1.537-.126-6.3.805-6.847 1.338-.324.317-.286.521.197 1.039.967 1.038 1.327 1.92 1.327 3.25 0 .686.076 1.324.169 1.416.387.388 2.86-.374 4.097-1.263zm-5.327-.14c-.102-.255-.178-.18-.194.194-.014.337.062.526.168.42.107-.107.118-.383.026-.614zm3.301-6.22c1.32-.254 2.688-.441 3.04-.415 1.14.083 1.171-.007.445-1.299-1.007-1.792-2.927-3.008-4.376-2.773-1.522.247-2.549 1.3-3.11 3.188-.55 1.856-.393 2.268.756 1.977.465-.118 1.925-.423 3.245-.677zM69.731-.07c.01-.132 1.031-1.025 2.268-1.986 3.195-2.48 4.567-5.54 3.773-8.416-1.09-3.944-6.647-5.958-10.772-3.902-1.898.946-2.97 2.226-3.717 4.441-.73 2.165-.696 2.337.433 2.17 1.409-.206 2.757.478 3.333 1.691.649 1.369.636 1.598-.178 3.046-1.861 3.31-5.72 2.054-5.72-1.862 0-2.052 1.606-6.673 2.806-8.075 3.273-3.824 9.49-4.052 12.963-.474 1.469 1.511 1.94 2.93 1.767 5.32-.112 1.549-.362 2.213-1.396 3.712C73.514-1.831 69.627 1.2 69.73-.07zm-5.729-2.903c1.02-2.043-.211-4.093-2.265-3.77-1.326.207-1.615.61-1.621 2.261-.004.997.183 1.424.875 1.997 1.232 1.02 2.348.84 3.011-.488zM41.84-1.84c-1.503-1.147-1.934-4-1.222-8.09.265-1.523.596-2.266 1.403-3.147.923-1.007 1.244-1.153 2.546-1.153 1.852 0 3.638.882 4.857 2.398.51.634 1.251 1.512 1.647 1.952.758.841.94 1.264.4.93-.185-.114-.32.197-.32.741 0 1.202-.82 3.535-1.511 4.298-.707.78-2.472 1.603-3.151 1.469-.298-.06-.734-.399-.97-.754-.37-.559-.328-.863.311-2.242.69-1.49 2.463-3.412 3.45-3.741.761-.254-.103-1.897-1.597-3.036-1.124-.858-1.671-1.055-2.935-1.055-1.353 0-1.64.121-2.222.94-.893 1.253-1.397 4.164-1.126 6.5.168 1.441.443 2.15 1.146 2.951.509.58.925 1.143.925 1.252 0 .339-1.095.196-1.63-.213zm6.171-1.648c1.22-.51 1.789-1.491 2.075-3.582.251-1.832-.328-1.858-1.964-.09-1.156 1.25-1.82 2.869-1.532 3.73.165.493.095.496 1.421-.058zm-48.38-.8c0-.164.256-.38.57-.48.797-.252 3.555-3.028 4.155-4.182.311-.598.489-1.721.47-2.978-.034-2.44-.887-3.783-3.08-4.845-1.377-.666-4.193-.858-4.532-.308-.078.124.144.853.491 1.619 1.71 3.77-.496 8.834-3.505 8.047-1.227-.32-2.195-3.215-1.793-5.36.114-.608.706-1.846 1.316-2.752.61-.906 1.108-1.772 1.108-1.926 0-.153-.972-.56-2.16-.906-1.87-.544-2.828-.63-4.428-.4-.192.027-.893.514-1.558 1.082-1.207 1.031-1.21 1.038-1.018 2.96.377 3.775 2.63 7.848 4.401 7.957.612.037.818.217.79.69-.031.504-.242.627-.993.576-1.3-.087-3.43-2.458-4.335-4.825-.844-2.209-1.181-6.074-.643-7.373.966-2.332 6.4-2.958 9.79-1.128.658.356 1.855.528 3.86.553 2.634.034 3.051.127 4.48 1.001 4.408 2.698 3.92 8.23-1.096 12.396-1.034.86-2.29 1.178-2.29.582zm-3.686-4.367c1.559-1.021 1.727-5.418.281-7.335-.472-.626-.503-.616-1.417.466-.924 1.093-1.502 2.88-1.128 3.486.107.173.034.367-.161.432-.52.173.925 3.456 1.522 3.456.072 0 .479-.227.903-.505z"
        ></path>
      </g>
    </svg>
  );
}

export default SvgComponent;
