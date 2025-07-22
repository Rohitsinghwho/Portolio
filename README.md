## HEY!!
### WELCOME TO DEVROHIT - A PORTOLIO PROJECT

-- here i have listed my work on this project so kindly go through if you like to know about my project





## TABLE OF CONTENT:
- [Tech-stack-used](#tech-stack-used)
- [API-FORMAT](#api-format)
- [How-the-Images-are-handled-in-backend](#how-the-images-are-handled-in-backend)
- [Desgin](#desgin)
- [About-the-project](#about-the-project)
- [About-developer](#about-developer)
- [Link-of-project](#link-of-project)





## API-FORMAT 
### {}->>comments

----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
## PROJECTS API FORMAT

endpoint->POST-> https://localhost:4000/api/v1/project/     {To add a single project}
endpoint ->GET -> https://localhost:4000/api/v1/project/    {To get all the project list sorted by recent addition}

------------------------------------------------
### POST->
format---------
#### REQUEST---
header:{
  content-type:application/json
  Authorization:`Bearer token`
}
data:{
	imageUrl:string,
	languages:Array[string]
	title:string,
	desc:string,
	link:string
}

#### RESPONSE--
if Successfully posted
data:{
	status:200
	message:"Project added successfully"
}
if failed 
data:{
	status:400
	message:"Failed to add project"
}
---------------------------------------------------------------------------
### GET->
format----------

#### REQUEST----
header:{
	content-type:application/json
}

#### RESPONSE----
header:{
  content-type:application/json
}
data:{
	imageUrl:string,
	languages:Array[string]
	title:string,
	desc:string,
	link:string
}
------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------

## SKILLS API

ENDPOINT-->POST-> https://localhost:4000/api/v1/skill/
ENDPOINT-->GET-> https://localhost:4000/api/v1/skill/

#### REQUEST---
header:{
  content-type:application/json
  Authorization:`Bearer token`
}
data:{
	
}

#### RESPONSE--
if Successfully posted
data:{
	status:200
	message:"skills added successfully"
}
if failed 
data:{
	status:400
	message:"Failed to add skills"
}

### GET->
format----------

#### REQUEST----
header:{
	content-type:application/json
}

#### RESPONSE----
header:{
  content-type:application/json
}
data:{
	
}