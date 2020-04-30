import React from 'react';
 
class BlogPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          isToggleOn: true,
          items: [],
          item: null
        
        };
      // Эта привязка обязательна для работы `this` в колбэке.
      this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
        const metData={ 
            size: 4,
            offset: 1
        }
        this.getItems(metData);
        console.log("Hello test");
        
    }
    getItems(param){
        fetch(`http://pga.uz:8080/api/posts?size=${param.size}&offset=${param.offset}`)
        .then(data => data.json() )
        .then(data => {
            console.log(data);
            
        })
    }
    handleClick() {
        console.log("Hello");
      
    }
    render() {
      return (
          <div>
              {this.state.item ? this.state.item.title.uz : "item is null"}
        </div>
        
      );
    }
  }
  
  export default BlogPage;


// export const BlogPage = () => {
//     // console.log("Hello");
//     // const api_url = fetch(`http://pga.uz:8080/api/posts?size=24&offset=0`)
//     //     .then(data => data.json() )
//     //     .then(data => {
//     //         console.log(data);
//     //     })
//     // const data = api_url.json();
    

//     return(
//         <div>
//             blog page sdfdsfsdf
//             <button>Poluchit</button>
//         </div>
//     )
// };