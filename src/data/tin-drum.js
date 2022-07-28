import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width="102.58mm"
      height="110.79mm"
      viewBox="0 0 102.58 110.79"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M429.93 159.57c-3.975-.206-5.369-.362-14.155-1.585-8.313-1.156-17.363-3.45-23.073-5.849-3.966-1.665-5.496-2.043-9.388-2.32-5.16-.366-7.34-1.104-9.804-3.32-2.11-1.896-4.198-5.484-6.583-11.306a145.412 145.412 0 00-2.392-5.47c-3.091-6.588-3.652-8.71-3.65-13.794.002-3.369.079-4.046.628-5.556 1.43-3.929 3.527-7.272 6.867-10.944 1.04-1.144 1.943-2.335 2.006-2.646.063-.31.265-1.383.45-2.382.276-1.504.377-1.721.584-1.257.301.675.583.716.812.119.155-.406-.094-.719-.775-.97-.145-.055-.056-.334.199-.621.254-.287.475-.87.49-1.295.014-.426.111-1.071.216-1.435.185-.64.379.566.958 5.953.094.873.457 2.412.808 3.42.35 1.007.637 2.05.637 2.315 0 .266.106.483.235.483s.187-1.042.129-2.315c-.058-1.273-.016-2.137.095-1.918.111.218.436.743.723 1.166.427.631.506 1.13.441 2.778-.044 1.105-.189 2.122-.322 2.26-.151.156-.243.08-.243-.198 0-.503-.404-.603-.673-.167-.33.535.176 2.625.822 3.393.632.75.64.823.385 3.242-.143 1.361-.262 3.837-.265 5.502-.004 2.666-.049 2.966-.376 2.518-.35-.478-.364-.467-.24.182.118.618.062.678-.526.565-.528-.1-.747-.408-1.107-1.551-.246-.784-.398-1.575-.338-1.758.061-.182-.248-1.107-.687-2.054-.692-1.492-.814-2.1-.91-4.535-.083-2.119 0-3.19.336-4.347.486-1.67.922-1.593.93.164.004 1.075.98 5.023 1.33 5.38.314.32.158-1.051-.65-5.741-.372-2.155-.754-5.28-.85-6.946-.094-1.665-.276-3.028-.403-3.028-.286 0-.747 1.17-.747 1.895 0 .741-.787 2.337-1.154 2.34-.166.002-.498.568-.738 1.257-.241.69-1.155 2.803-2.033 4.696-2.462 5.315-3.39 9.803-2.89 13.985.174 1.46.57 2.587 1.822 5.184.88 1.826 1.823 3.878 2.096 4.56.918 2.299 3.434 7.104 5.327 10.18 3.416 5.545 5.862 7.61 10.952 9.24 1.65.529 3.809 1.383 4.797 1.899l2.988 1.557c.934.487 1.904.678 4.498.89 1.82.147 4.617.573 6.218.945 2.744.64 7.54 1.161 7.54.821 0-.085-.716-.296-1.59-.468-2.004-.394-3.833-1.534-4.413-2.75-.398-.835-.409-1.25-.109-4.171.369-3.59.541-3.946 2.276-4.717 3.404-1.511 10.187-1.953 26.366-1.718l12.343.18 2.606-1.296c1.433-.713 4.375-2.055 6.538-2.983l3.932-1.686-.173-1.465c-.298-2.52-.667-10.551-.675-14.694-.012-6.085-.595-8.79-2.49-11.557-1.032-1.507-3.865-7.248-3.865-7.832 0-.122-.178-.452-.397-.735-.366-.474-.386-.422-.268.677.096.9.07 1.03-.107.53-.225-.638-.235-.63-.26.198-.014.473.097.86.248.86.188 0 .188.159 0 .511-.346.647-.343 2.737.006 4.119.424 1.682.546 8.25.187 10.054l-.317 1.587-.174-1.19c-.096-.655-.066-1.328.068-1.495.278-.35.243-4.326-.038-4.326-.103 0-.334.506-.514 1.124-.18.619-.752 1.993-1.27 3.055-1.597 3.27-4.488 5.488-11.078 8.501-3.75 1.714-3.998 1.81-9.634 3.69-6.717 2.241-6.667 2.228-6.914 1.838-.122-.192-.225-2.432-.229-4.979-.004-2.546-.079-4.896-.166-5.22-.122-.456-.015-.646.467-.83 1.347-.515 2.343-2.408 2.346-4.459.001-.695.164-2.34.36-3.652l.36-2.388 3.376-3.433c1.856-1.888 3.298-3.206 3.203-2.928-.095.279-.6 1.945-1.122 3.705a2392.093 2392.093 0 01-5.535 18.28c-.54 1.746-1.083 3.285-1.204 3.42-.127.14-.394-.17-.628-.728-.223-.535-.468-.973-.543-.973-.192 0 .022 2.235.25 2.605.116.186.011.306-.267.306-.25 0-.4.056-.33.126.183.183 3.13-.32 6.234-1.063 2.757-.66 5.696-1.725 8.031-2.908 1.31-.663 1.713-1.026.844-.758-.254.078.55-.399 1.786-1.06 1.237-.662 2.64-1.561 3.12-1.998.832-.76.851-.821.453-1.43-.382-.581-.38-.65.023-.804.353-.135.405-.381.266-1.251-.22-1.378-4.48-14.26-5.968-18.046l-1.126-2.867.756-.887c.416-.488 1.828-2.156 3.138-3.707s2.823-3.083 3.364-3.406c.541-.322 1.465-1.031 2.053-1.575 1.064-.985 1.07-.986 1.3-.381.127.334.435 1.084.683 1.666.249.582.606 1.534.794 2.116.544 1.687 1.81 4.25 1.927 3.901.205-.616-.978-4.205-2.339-7.093-.592-1.258-.617-1.667-.138-2.298.538-.708.751-.554.55.397-.138.658-.107.79.133.561.172-.164.38-.789.46-1.389.155-1.16.708-1.472.953-.537.108.415.279.51.682.382.296-.094.776-.043 1.068.113.724.388 2.718 3.797 2.521 4.31-.087.227.09.898.394 1.493.303.594.719 1.954.923 3.022.204 1.068.81 3.123 1.348 4.567 1.106 2.971 3.654 8.475 4.212 9.094 1.92 2.134 3.106 8.078 3.117 15.624.007 4.417-.432 7.18-2.332 14.68-1.387 5.477-1.543 5.73-4.475 7.204-1.019.513-1.902.978-1.964 1.034-.06.057.14.37.446.697.93.993 1.12 1.937 1.12 5.555 0 2.968-.078 3.635-.546 4.601-1.408 2.908-5.85 4.961-13.08 6.046-2.755.413-6.415.449-12.7.123zm17.813-6.871c3.636-1.01 7.19-3.048 7.19-4.123 0-1.002-3.687-2.794-6.836-3.323-1.722-.29-1.902-.261-7.683 1.2-4.983 1.259-6.615 1.554-10.319 1.868-5.34.452-7.525.929-10.999 2.398-1.463.619-3.137 1.273-3.72 1.454-.581.18-1.154.417-1.271.524-.363.33 7.164.503 10.797.248 2.45-.173 5.342-.135 10.054.132 7.676.436 10.113.364 12.786-.379zm-23.618-4.963c-.125-.125-2.53.914-2.53 1.093 0 .068.593-.126 1.317-.433s1.27-.603 1.213-.66zm-3.588-.912c3.229-.863 4.25-.978 6.163-.694 1.562.232 2.038.194 3.625-.288 3.352-1.018 2.764-1.179-3.967-1.088-9.602.13-17.198.841-17.198 1.61 0 .265 1.625.748 3.572 1.06 1.871.299 5.475.022 7.805-.6zm24.276-31.09c1.036-.831 1.412-1.397.926-1.395-.271.002-2.712 2.232-2.712 2.479 0 .264.44-.002 1.786-1.083zm.713-2.816c.473-1.695.97-5.64 1.006-7.975l.027-1.768.472.885c.325.61.485 1.545.514 3.002.023 1.164.1 1.879.171 1.588.072-.291.226-.649.343-.794.117-.146.363-.992.546-1.882.257-1.243.276-3 .084-7.59-.294-7.017-.593-7.898-1.428-4.199-.277 1.228-.38 1.404-.571.97-.16-.362-.193-.148-.107.686.07.668.026 1.323-.098 1.456-.209.224-.477 1.829-1.898 11.353-.948 6.347-.938 5.912-.134 5.758.574-.11.76-.368 1.073-1.49zm-72.688-6.447c-.06-.403-.112-.136-.114.591-.002.728.048 1.057.11.731.063-.325.065-.92.004-1.322zm77.771-7.718c-.1-4.927-.143-5.306-.67-5.871l-.562-.604v3.856c0 2.905.098 4.043.395 4.614.218.417.471 1.323.564 2.015.092.69.216 1.256.274 1.256.058 0 .058-2.37-.001-5.266zm-.25-12.26c-.064-.329-.118-.122-.121.46-.003.583.049.852.115.599s.069-.73.005-1.058zm.252-1.59c-.073-.182-.133-.033-.133.33 0 .364.06.513.133.331.073-.181.073-.48 0-.661zm.25-2.508c-.27-.269-.492.136-.271.493.167.27.229.27.319.001.06-.184.04-.406-.049-.494zm-29.294 49.547c-.128-1.776.022-3.099.341-2.992.172.057.44.335.596.617.156.282.395.594.533.693.355.256-.239 1.445-.898 1.798-.436.233-.548.21-.572-.116zm-2.197-.87c.099-.545.24-1.097.315-1.226.19-.33.833.906.844 1.624.007.463-.14.595-.664.595-.634 0-.663-.059-.495-.992zm-8.667-2.448a7.926 7.926 0 01-1.807-.754l-.834-.508 2.732-.179c2.772-.182 6.404-.55 8.24-.835l1.008-.156-.165 2.234-1.985.06c-1.091.034-2.936.134-4.1.222-1.165.09-2.555.05-3.09-.084zm-14.374-2.494a71.004 71.004 0 01-5.689-1.488c-1.528-.483-3.076-.904-3.44-.934-2.423-.203-3.958-.531-4.762-1.019a39.297 39.297 0 00-1.872-1.052c-1.793-.93-2.628-1.803-2.806-2.934-.091-.582-.285-1.136-.431-1.231-.175-.115-.157-.964.053-2.514.175-1.287.334-3.62.354-5.184.034-2.61.088-2.892.653-3.422.762-.716 1.06-1.814 1.291-4.749l.18-2.283 1.836-.825c2.127-.957 2.444-1.011 2.108-.363-.332.638-3.606 12.777-4.401 16.314-.64 2.85-.65 3.465-.05 3.25.404-.145 1.762.547 1.762.898 0 .15.098.213.217.139.12-.074.78.404 1.466 1.062.687.658 1.81 1.436 2.495 1.728.685.293 1.782.775 2.437 1.072 2.165.981 6.48 2.278 8.747 2.63 1.729.267 2.054.379 1.439.495-.669.127-.481.217 1.19.573 1.387.294 1.706.425 1.059.434-.51.007-2.236-.262-3.837-.597zm-12.04-3.987c-.363-.208-.78-.378-.925-.378s.033.17.396.378c.364.208.78.378.926.378s-.033-.17-.396-.378zm14.768 3.656c.19-.077.419-.067.507.02.088.089-.069.151-.348.14-.308-.013-.37-.076-.16-.16zm-1.396-1.209c-.059-.181-1.115-3.188-2.348-6.68s-3.342-9.744-4.688-13.891c-1.345-4.148-2.528-7.635-2.628-7.75s-.499-.087-.886.06c-1.729.658-.175-.331 3.72-2.368l2.175-1.137 3.513.575c1.933.317 3.811.575 4.175.574.437 0 1.425.647 2.917 1.914a390.43 390.43 0 003.285 2.76c.77.633.96.933.755 1.191-.332.417-9.338 24.295-9.338 24.757 0 .426-.515.422-.652-.005zm-19.27-1.785c-.086-.331-.007-.53.21-.53s.295.199.209.53c-.077.29-.17.529-.21.529-.038 0-.132-.238-.208-.53zm-1.319.103c-.288-.289-.23-1.426.073-1.426.146 0 .267-.328.269-.728.003-.567.06-.64.26-.33.142.218.259.7.261 1.073.005.762-.57 1.703-.863 1.41zm-1.326-1.855c-.103-.104-.188-.352-.188-.553s-.238-.619-.53-.931c-.642-.69-.679-1.066-.094-.951.744.146 1.47 1.353 1.22 2.028-.12.327-.304.51-.408.406zm42.955-3.849c-.828-.889-.72-1.312.249-.974.495.172.794.46.794.764 0 .761-.446.851-1.043.21zm23.124-.238c-.096-.155-.118-.339-.048-.408.07-.07.196.057.283.282.178.466.026.548-.235.126zm-22.767-3.786c-.084-.219-.04-.598.097-.843.213-.381.27-.344.384.254.146.765-.235 1.231-.48.59zm2.438-2.272c.18-2.023.472-2.586 1.08-2.082.185.154.516.21.736.126.358-.137.358-.05 0 .805-.22.527-.34 1.018-.267 1.091.073.074.002.292-.158.486-.16.193-.225.525-.144.738.1.26.023.339-.238.239-.254-.098-.338-.023-.244.221.093.242-.045.37-.4.37-.514 0-.533-.104-.365-1.994zm-2.634.608c-.28-.28-.205-1.94.088-1.94.145 0 .264.476.264 1.058 0 1.081-.043 1.19-.352.882zm.867-2.893c-.33-.618-.316-.726.138-1.059 1.111-.812 1.688-.278 1.002.928-.565.993-.672 1.006-1.14.13zm-4.264-1.892c-.44-1.121-.303-1.466.296-.743.174.21.278.715.231 1.124-.081.71-.104.694-.527-.38zm-.573-2.595c-.473-.416-1.314-1.951-2.278-4.158-2.246-5.14-2.138-4.95-2.76-4.855-.38.058-.715.496-1.091 1.432-.298.741-.622 1.428-.72 1.525-.165.166-3.693-2.555-4.37-3.37-.264-.318.416-.374 4.64-.385 10.172-.024 20.962-1.986 28.047-5.1 1.353-.594 2.524-1.08 2.603-1.08.172 0-3.418 4.185-3.614 4.213-.075.01-.34-.308-.588-.708-.248-.4-.454-.579-.458-.397-.004.182-.226.33-.493.33-.383 0-.637.514-1.209 2.448-.79 2.672-.833 2.73-5.402 7.43-2.066 2.125-2.303 2.294-2.615 1.868-.188-.258-.342-.551-.342-.651 0-.357-1.559-.82-2.139-.636-.324.103-.86.48-1.191.836l-.602.65-.548-.548c-.803-.804-2.012-.711-2.95.225-.425.426-.773.961-.773 1.19 0 .574-.269.514-1.146-.258zm-37.164-1.638c.071-1.619.132-1.789.65-1.815.481-.024.599.16.752 1.182.119.794.082 1.245-.108 1.308-.16.053-.29.325-.29.604 0 .334-.184.507-.54.507-.5 0-.536-.138-.464-1.786zm-.322-2.725c-.002-.211-.075-.652-.163-.98-.088-.327-.04-.595.105-.595.36 0 .61 1.394.306 1.707-.153.157-.246.107-.248-.132zm2.254-2.362c-.227-1.341-1.175-2.76-1.916-2.868-.316-.045-.656-.342-.757-.66-.1-.317-.521-.875-.935-1.24-.925-.816-1.43-2.405-1.971-6.217-.308-2.16-.545-3.031-.924-3.384-.28-.261-.51-.645-.51-.853 0-.208.923.547 2.05 1.678 1.129 1.131 2.746 2.51 3.595 3.063 3.137 2.047 8.14 4.203 12.05 5.193.637.161 1.054.387.926.503-.35.315-3.276 1.868-3.521 1.868-.118 0-.364-.533-.546-1.185-.35-1.248-.86-1.88-1.3-1.609-.143.09-.57 1.172-.946 2.406l-.684 2.243-2.102 1.057c-1.156.581-2.153 1.057-2.217 1.057s-.195-.473-.292-1.052zm-3.044.11c0-.227.119-.339.265-.249.145.09.264.276.264.413s-.119.249-.264.249-.265-.186-.265-.413zm33.817-5.589c.19-.076.42-.067.507.021.088.088-.068.15-.347.139-.308-.013-.371-.075-.16-.16zm-13.592-.992c-.706-.52-.16-1.162.585-.687.427.273.43.294.026.168-.255-.079-.463-.035-.463.097 0 .43.543.59.926.272.408-.339 1.028-.115.782.283-.229.37-1.275.296-1.856-.133zm-.625-2.156c.013-.309.075-.371.16-.16.076.19.067.419-.021.507-.088.088-.15-.069-.14-.347zm-24.047-2.668c-.301-.57-.338-1.94-.052-1.94.221 0 .614 2.12.428 2.306-.066.066-.235-.099-.376-.366zm35.719-1.101c-.205-.135 1.132-.295 3.307-.396 3.926-.182 10.763-.966 14.345-1.646 2.489-.472 8.698-2.322 9.928-2.958.708-.367.746-.44.31-.592-.392-.138-.223-.282.795-.677 2.282-.885 3.556-.275 1.38.661-6.04 2.598-14.137 4.596-21.386 5.277-4.57.429-8.312.571-8.68.33zm-8.519-.522c0-.116.417-.163.926-.103.51.06.926.154.926.211 0 .057-.416.104-.926.104s-.926-.096-.926-.212zm-4.365-.344c-.437-.135-1.866-.483-3.175-.772-5.577-1.235-11.15-3.51-14.566-5.948-3.156-2.252-5.698-5.878-5.658-8.07l.017-.926.526 1.331c2.129 5.395 8.717 9.697 18.858 12.316 2.198.568 3.402.959 2.674.869-1.55-.192-1.52.032.054.386.635.142 1.195.148 1.33.012.129-.128.823-.147 1.542-.042l1.308.192-.926.172-.926.172.86.035c.472.02.86.154.86.3 0 .324-1.697.308-2.779-.027zm-7.269-.228c-.214-.135-.308-.327-.21-.425.242-.243.996.065.996.406 0 .337-.274.343-.786.02zm28.11-.194c.257-.067.614-.062.793.01.18.073-.032.128-.468.122-.437-.005-.583-.065-.326-.132zm2.508-.256c.182-.073.48-.073.661 0s.033.133-.33.133c-.364 0-.513-.06-.331-.133zm-33.734-.362c-.502-.202-.856-.786-.476-.786.338 0 1.468.644 1.468.836 0 .272-.218.26-.992-.05zm37.455-.173c.19-.076.419-.067.507.021.088.088-.068.15-.347.14-.309-.014-.371-.076-.16-.16zm21.745-.994c0-.397.475-.82.685-.61.185.185-.18.991-.449.991-.13 0-.236-.171-.236-.381zm-.773-1.556c-.017-.827.064-.996.442-.924.582.111.8 1.274.239 1.274-.216 0-.453.149-.527.33s-.143-.124-.154-.68zm1.699-.18c-.09-.145-.038-.264.116-.264.155 0 .28.119.28.265s-.052.264-.116.264-.19-.119-.28-.264zm-11.18-3.02c-2.569-.704-2.94-.948-1.442-.948 1.115 0 3.89.892 4.166 1.34.218.354-.257.285-2.724-.391zM446 73.374c-.242-.153-.11-.421.486-.988.893-.848 1.565-1.972 1.565-2.616 0-.307-.287-.41-1.142-.41-1.82 0-4.22-.516-4.999-1.074-.394-.283-1.168-.523-1.72-.534-1.189-.024-2.942-.606-2.552-.848.15-.093 1.076-.199 2.057-.235 1.435-.053 1.91-.184 2.437-.672.506-.469.964-.606 2.017-.606 1.06 0 1.291-.07 1.045-.318-.626-.625-.283-.74 2.196-.74h2.513l-.006 2.182c-.007 2.473-.44 3.703-2.042 5.804-.98 1.285-1.251 1.44-1.855 1.055zm3.131-4.113c.523-1.152.667-2.148.274-1.905-.128.079-.292.413-.364.743-.072.33-.33 1.056-.574 1.615-.259.593-.316.938-.138.828.169-.104.53-.68.802-1.281zm-76.374 1.017c-.338-.809-.372-1.224-.156-1.927.194-.632.19-1.104-.014-1.598-.392-.95-.295-1.475.638-3.443.44-.926.823-1.852.854-2.059.1-.68 3.157-3.545 5.342-5.008 2.733-1.828 6.51-3.615 7.133-3.376.27.103.4.072.31-.074-.09-.145.256-.232.816-.205.535.026 1.925-.228 3.089-.565a95.67 95.67 0 013.969-1.044c1.018-.238 2.013-.487 2.211-.553.29-.098.341.33.265 2.196-.095 2.317-.095 2.318.58 2.397 1.422.165 2.131-1.893.846-2.457-.64-.28-.738-.784-.351-1.8.268-.707.263-.706 5.577-1.375 3.604-.454 13.906-.528 17.67-.126 1.414.15 3.8.517 5.305.815 1.504.297 2.79.486 2.856.42.067-.067-.688-.27-1.676-.453-1.905-.35-2.677-.636-2.295-.847.128-.07 1.297.086 2.599.349 5.314 1.071 11.616 3.407 11.709 4.34.028.289.201 1.33.384 2.31.21 1.131.24 1.878.08 2.036-.139.137-1.74.332-3.56.431-3.076.17-3.455.135-5.424-.484-6.523-2.05-17.818-2.867-26.59-1.922-14.792 1.593-26.902 6.864-30.752 13.384l-.985 1.669zm10.588-15.347c.282-.214.401-.385.265-.38-.137.005-.48.183-.763.397-.283.213-.402.384-.265.38.137-.005.48-.183.763-.397zm2.926-1.328c.728-.353 1.025-.569.661-.48-.758.188-2.648 1.134-2.249 1.127.146-.002.86-.293 1.588-.647zm53.292.314c-.06-.053-.408-.238-.772-.412-.623-.297-.632-.291-.148.097.422.338 1.283.633.92.315zm-2.624-1.227c-.218-.14-.516-.256-.661-.256s-.086.115.132.256c.218.141.516.257.661.257s.086-.116-.132-.257zm-1.749-.668a9.148 9.148 0 00-1.587-.51c-.42-.082-.17.081.558.362 1.51.583 2.27.692 1.03.148zm-2.881-.92c-.291-.124-.708-.226-.926-.226-.25 0-.201.084.132.227.291.125.708.227.926.227.25 0 .202-.084-.132-.227zm-1.527-.424c-.088-.087-.316-.097-.507-.02-.211.084-.148.147.16.16.279.01.435-.052.347-.14zm11.241 7.5c-.397-.486-1.123-3.106-.861-3.106.124 0 .158-.256.077-.569l-.149-.568.858.502c1.15.672 4.251 3.236 4.251 3.513 0 .12-.792.242-1.761.268-.969.027-1.848.103-1.954.168-.107.066-.314-.028-.461-.208zm.87-2.311c-.09-.145-.424-.391-.743-.547-.5-.245-.49-.209.08.257.741.606.902.676.663.29z"
        fill="current"
        transform="translate(-360.88 -49.001)"
      />
    </svg>
  );
}

export default SvgComponent;
