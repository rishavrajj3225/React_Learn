I am learning React.


React me <a> tag ka use nhi krte hai kyunki "a" tag plug hote hi page ko refresh krta hai but there is no concept of refresh in react. so we use <LINK> tag. 
in react component will directly add into dom


<NavLink> is same as link but it has more fearure such like it have access of {isActive} variable 
means anylink is active or not can easily determined by this which is very useful if we want to show my which page is active

jab v humko rutime me className change krna hota hai to hum className function me likhte hai className={()=>`bg-red-500`};