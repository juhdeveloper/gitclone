
import { Container, Main, LeftSide, RightSide } from './style';
import {ProfileData} from '../../components/ProfileData'
export function Profile(){


  return(
 <Container>
   <Main>
    <LeftSide>
      <ProfileData  
         username={'Juhdeveloper'}
         name={'Juliana'}
         avatarUrl={'https://github.com/juhdeveloper.img'}
         followers={887}
         following={500}
         company={'Livsaude'}/>
    </LeftSide>

    <RightSide 
    ></RightSide>
   </Main>
 </Container>  
  );
};
