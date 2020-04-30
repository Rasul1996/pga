import styled from 'styled-components';

export const HeaderSection = styled.div`

  @media (min-width: 374.98px) {
    
    background-color: #061331;
  }
  @media (min-width: 1199.98px){
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 50;
  
    &:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #061331;
    z-index: 2;
    }

  }
`;
export const HeaderBody = styled.div`

  @media (min-width: 374.98px){
    height:50px;

    .HeaderLogo{
    flex: 0 0 40px;
  }
   

  }
  @media (min-width: 1199.98px){
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;

    .HeaderLogo{
    flex: 0 0 100px;
    overflow: hidden;
    position: relative;
    z-index: 3;
    }

    .HeaderLogo img{
      max-width: 100%;
      display: block;
    }

  }


`;

export const HeaderBurger = styled.div`
@media (min-width: 374.98px){
    display: block;
		width: 30px;
		height: 20px;
		position: relative;
    z-index: 3;
    left: 250px;
    bottom: 25px;
    
    
  &:before{
    content: '';
    background-color: #fff;
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    transition: all 0.3s ease 0s;
  }

  &:after{
    content: '';
    background-color: #fff;
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    transition: all 0.3s ease 0s;
  }
  &:before{
    top: 0;
  }
  span{
    position: absolute;
		background-color: #fff;
		left: 0;
		width: 100%;
		height: 2px;
		top: 9px;
		transition: all 0.3s ease 0s;
  }
  &:after{
    bottom: 0;
  }
  &.active:before{
    transform: rotate(45deg);
		top: 9px;
  }
  &.active:after{
    transform: rotate(-45deg);
		bottom: 9px;
  }
  &.active span{
    transform: scale(0);
  }


}


@media (min-width: 767.98px){
  display: block;
  width: 30px;
  height: 20px;
  position: relative;
  z-index: 3;
  left: 660px;
  bottom: 25px;
  
  
&:before{
  content: '';
  background-color: #fff;
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0;
  transition: all 0.3s ease 0s;
}

&:after{
  content: '';
  background-color: #fff;
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0;
  transition: all 0.3s ease 0s;
}
&:before{
  top: 0;
}
span{
  position: absolute;
  background-color: #fff;
  left: 0;
  width: 100%;
  height: 2px;
  top: 9px;
  transition: all 0.3s ease 0s;
}
&:after{
  bottom: 0;
}
&.active:before{
  transform: rotate(45deg);
  top: 9px;
}
&.active:after{
  transform: rotate(-45deg);
  bottom: 9px;
}
&.active span{
  transform: scale(0);
}
}

@media (min-width: 991.98px){
  display:none;
}



`;

export const Menu = styled.div`

@media (min-width: 374.98px) {
  .HeaderList li{
    list-style: none;
    margin: 0 0 20px 20px;
  }
  .HeaderLink{
    color: #fff;
    text-transform: uppercase;
    font-size: 17px;
    text-decoration: none;
  }

  &.active{
    overflow: auto;
		left: 0;
		width: 100%;
    background-color: #061331;
    position:absolute;
    z-index:3;
    top:50px;
  }
		
		


}

@media (min-width: 991.98px){
  .HeaderList li{
    list-style: none;
    margin: 0 0 20px 20px;
  }
  .HeaderLink{
    color: #fff;
    text-transform: uppercase;
    font-size: 17px;
    text-decoration: none;
  }

  &.active{
    overflow: auto;
		left: 0;
		width: 100%;
    background-color: #061331;
    position:absolute;
    z-index:3;
    top:50px;
  }
  .HeaderList{
    display: flex;
    position: relative;
    z-index: 2;
    margin: 0;
    padding-left: 15px;
  }
  .HeaderList li{
    display: inline-block;
    padding-left: 4px;
    text-transform: uppercase;
    font-weight: 500;
    margin: 0 0 0 20px;
    list-style: none;
  }
  .HeaderLink{
    color: #fff;
    text-transform: uppercase;
    font-size: 17px;
    text-decoration: none;
  }
  
  .HeaderLink:hover{
    padding-bottom:24px;
    border-bottom:5px solid #FFA206;
    color:#FFA206;
  }  
    width: 700px;
    display: flex;
    justify-content: flex-end;
    top:0;
}

@media (min-width: 1199.98px){
  .HeaderList{
    display: flex;
    position: relative;
    z-index: 2;
    margin: 0;
    padding-left: 15px;
  }
  .HeaderList li{
    display: inline-block;
    padding-left: 4px;
    text-transform: uppercase;
    font-weight: 500;
    margin: 0 0 0 20px;
    list-style: none;
  }
  .HeaderLink{
    color: #fff;
    text-transform: uppercase;
    font-size: 17px;
    text-decoration: none;
  }
  
  .HeaderLink:hover{
    padding-bottom:24px;
    border-bottom:5px solid #FFA206;
    color:#FFA206;
  }  
    width: 700px;
    display: flex;
    justify-content: flex-end;
    top:0;
}

`;


export const Language = styled.div`
@media (min-width: 991.98px){
  z-index: 2;
ul{
  display: flex;
  padding: 0;
  margin-bottom:0;
}
li{
  padding-right: 5px;
  padding-left: 5px;
  list-style:none;
  font-size: 17px;
  text-transform: uppercase;
  font-weight: 500;
}
li:nth-child(2n){
  border-left:1px solid #ffffff;
  border-right:1px solid #ffffff;
}
a{
  color:white;
}

a:hover{
  color:#FFA206;
} 
}
@media (min-width: 1199.98px){
z-index: 2;
ul{
  display: flex;
  padding: 0;
  margin-bottom:0;
}
li{
  padding-right: 5px;
  padding-left: 5px;
  list-style:none;
  font-size: 17px;
  text-transform: uppercase;
  font-weight: 500;
}
li:nth-child(2n){
  border-left:1px solid #ffffff;
  border-right:1px solid #ffffff;
}
a{
  color:white;
}

a:hover{
  color:#FFA206;
} 
}
`;



