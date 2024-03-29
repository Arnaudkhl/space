import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import p1 from '../images/p1.svg';
import p6 from '../images/p6.svg';
import p3 from '../images/p3.svg';
import p4 from '../images/p4.svg';


const Section =styled.section`
height:100vh;
display:flex;
justify-content:center;
align-items: center;
background-image:url("../images/space1.jpg");
`;

const Container= styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
height: 85vh;
padding: 3rem; calc((100vw - 1300px) /2);
@media screen and (max-width:768px) {
    grid-grid-template-columns:1fr;
}
`;

const ColumnLeft =styled.div`
display:flex;
color:white;
flex-direction: column;
justify-content:center;
alig-items;flex-start;
padding:5rem 2rem;

h1{
    magin-bottom:0.5rem;
    font-size:2rem;
}

p{
    margin:2rem 0;
    font-size:4rem;
    line-height:1.1;
}
`;

const Button =styled(motion.button)`
padding:1rem 3rem;
font-size: 2rem;
border:2px solid #fff;
border-radius:25px;
outline:non;
cursor:pointer;
background: transparent;
color:#fff;
`;

const Image =styled(motion.img)`
position:absolute;
width:100%;
height:100%;
max-width:350px;
max-height:270px;

`;

const ColumnRight =styled.div`
display:flex;
justify-content: center;
align-items:center;
padding:2rem;
posistion:relative;

${Image}:nth-child(1){
    top:30px;
    right:270px;
}

${Image}:nth-child(2){
    top:230px;
    right:370px;
}

${Image}:nth-child(3){
    bottom:20px;
    right:10px;
}

${Image}:nth-child(4){
    top:10px;
    left:475px;
}

`;

const Hero = () => {
    const fadeLeft = {
        hidden:{ opacity:0,x:-100},
        visible:{opacity:1,x:0}
    }

    return (
    <Section >
        
       <Container>
           <ColumnLeft>
           <motion.h1
           initial={{opacity:0}}
           animate={{opacity:1}}
           transition={{duration:1}}
           > Déplace les planètes</motion.h1>
           <motion.p
           variants={fadeLeft}
           initial='hidden'
           animate='visible'
           transition={{duration:2}}
           
           > Voyage dans l'espace
           </motion.p>
         
          <Button
           whileHover={{scale: 1.10}}
           whileTap={{
               scale:0.95,
               backgroundColor:'#67F6E7',
               border:'none',
               color:'#000'
            }}
            initial={{ opacity:0}}
            animate={{opacity:1,transition:{duration : 1.5 }}}
           >Get Started</Button>
    
          
          
           </ColumnLeft>
           <ColumnRight>
           <Image src={p1} alt='planet'
            whileTap={{scale:0.9}} 
            drag={true}
            dragConstraints={{ left:0, right:600,top:0,bottom:50}}
            initial={{opacity:0,y: -100}}
            animate={{opacity:1,y:0,transition:{duration:1}}}
            />
           <Image src={p6} alt='planet'
            whileTap={{scale:0.9}}
            drag={true}
            dragConstraints={{ left:0, right:400,top:0,bottom:50}}
            initial={{opacity:0,x: -600}}
            animate={{opacity:1,x:0,transition:{duration:1}}}
             />
           <Image src={p3} alt='planet'
           whileTap={{scale:0.9}} 
           drag={true}
           dragConstraints={{ left:0, right:0,top:0,bottom:50}}
           initial={{opacity:0,y: -100}}
           animate={{opacity:1,y:0,transition:{duration:1}}}
            />
           <Image src={p4} alt='planet'
           whileTap={{scale:0.9}} 
           drag={true}
           dragConstraints={{ left:0, right:0,top:0,bottom:10}}
           initial={{opacity:0,x: -200}}
           animate={{opacity:1,x:0,transition:{duration:1}}}
            />
         
            
         
           </ColumnRight>
       </Container>
    </Section>
    )
}

export default Hero
