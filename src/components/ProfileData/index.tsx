import{Container, Flex, Avatar, Row, PeopleIcon, Column, CompanyIcon, LocationIcon, EmailIcon, BlogIcon } from './style'

interface ProfileDataProps {
  username: string,
  name: string,
  avatarUrl: string,
  followers: number,
  following: number,
  company?: string;
  location?: string,
  email?:string,
  blog?: string
}
export function ProfileData({username, name, avatarUrl, followers, company, following, location, email, blog}:ProfileDataProps){
  return(
<Container>
<Flex>
 
 <Avatar src={avatarUrl='https://avatars.githubusercontent.com/u/81878602?v=4'} alt={username}/>
 <div>
   <h1>{name}</h1>
   <h2>{username}</h2>
 </div>

 <Row>
<li>
  <PeopleIcon/>
  <b>{followers}</b>
  <span>Followers</span>
  <span>.</span>
</li>
<li>
 <PeopleIcon/> 
  <b>{following}</b>
  <span>Following</span>
</li>
 </Row>

 <Column>
 {company && (
   <li>
        <CompanyIcon/>
     <span>{company}</span>
  
   </li>
 ) }

{location && (
   <li>
 
     <LocationIcon/>
    <span>{location}</span>

   </li>
 ) }

{email && (
   <li>
     <EmailIcon/>
     <span>{email}</span>
   </li>
 ) }

{blog && (
   <li>
     <BlogIcon/>
    <span>{blog}</span>
   </li>
 ) }
 </Column>
 </Flex>
</Container>

    );
}
;