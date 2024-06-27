import React from 'react';

const SnapScrollContainer = ({ children }) => {
  return (
    <div className='h-screen snap-y snap-mandatory overflow-y-auto'>
      {React.Children.map(children, (child) => (
        <div className='h-screen snap-start'>{child}</div>
      ))}
    </div>
  );
};

//
// const App = () => {
//   return (
//     <div className='h-screen'>
//       {' '}
//       {/* 최상위 컨테이너 */}
//       <SnapScrollContainer>
//         <div className='flex items-center justify-center bg-red-200'>Section 1</div>
//         <div className='flex items-center justify-center bg-blue-200'>Section 2</div>
//         <div className='flex items-center justify-center bg-green-200'>Section 3</div>
//       </SnapScrollContainer>
//     </div>
//   );
// };

export default SnapScrollContainer;
