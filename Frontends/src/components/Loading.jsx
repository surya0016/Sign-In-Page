import React from 'react'
function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 "><circle fill="#000000" stroke="#000000" stroke-width="14" r="15" cx="40" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#000000" stroke="#000000" stroke-width="14" r="15" cx="100" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#000000" stroke="#000000" stroke-width="14" r="15" cx="160" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>
    </div>
    
  )
}

export default Loading