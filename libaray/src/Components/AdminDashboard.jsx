import '../styles/AdminDashBoard.css'
import React from 'react';
import Typed from 'typed.js';

const AdminDashboard = () => {
    // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['hello kural ', 'welcome to Library'],
      // typeSpeed: 50,
            loop : true,
            typeSpeed : 200,
            backSpeed : 80,
            backDelay : 1500,

            // showCursor :false,
            startDelay :100,
            smartBackspace :true,
            
    });
    return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);
    return ( 
        <div className="admindashboard">
            <h1>AdminDashboard</h1>
            <span ref={el} />
        </div>
     );
}
 
export default AdminDashboard;

// type and retype
// import React from 'react';
// import Typed from 'typed.js';

// function MyComponent() {
//   // Create reference to store the DOM element containing the animation
//   const el = React.useRef(null);

//   React.useEffect(() => {
//     const typed = new Typed(el.current, {
//       strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
//       typeSpeed: 50,
//     });

//     return () => {
//       // Destroy Typed instance during cleanup to stop animation
//       typed.destroy();
//     };
//   }, []);

//   return (
//     <div className="App">
//       <span ref={el} />
//     </div>
//   );
// }