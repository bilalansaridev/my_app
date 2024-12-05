
import { BottomNavigation, BottomNavigationAction, Typography,Box,Stack,Avatar } from "@mui/material";
import { Height, Home, Movie, Person, PlusOne, Search } from '@mui/icons-material';
import { useState } from "react";
export default function BottomNavi() {
    var [bottomstate, setbottomstate] = useState(0);
    var [tabstate, settabstate] = useState("1");
    var bottom_option = ["https://cdn.pixabay.com/photo/2024/11/26/18/50/skyscraper-9226515_640.jpg",
        "https://cdn.pixabay.com/photo/2022/11/27/13/27/couple-7619797_640.jpg",
        "https://cdn.pixabay.com/photo/2023/01/30/11/04/cat-7755394_640.jpg",
        "https://cdn.pixabay.com/photo/2023/09/25/20/38/lisbon-8275994_640.jpg",
        "https://cdn.pixabay.com/photo/2024/11/22/10/03/canyon-9215914_640.jpg"];
    return (
        <>
            {/* <Typography variant="h4" sx={{ color: "red" }}>
                {`${bottom_option[bottomstate]}`}
            </Typography> */}

            <div className="container">
                <div className="row my-3">
                    <div className="col-md-12">
                        
<Box sx={{

}}>
<Tabs value={tabstate} onChange={(e, v) => settabstate(v)} sx={{
display: "flex",
justifyContent: "center",
alignItems: "center",
width: "100%",
padding:0
}}
indicatorColor="secondary">
<Tab label="Chat" icon={<Chat />} value="1" sx={{ color:"red","&.Mui-selected":{color:"green"}}}/>
 <Tab label="Story" icon={<StoreMallDirectory />} value="2" sx={{ color:"red","&.Mui-selected":{color:"green"}}}/>
  <Tab label="Call" icon={<Call />} value="3" sx={{ color:"red","&.Mui-selected":{color:"green"}}}/>
</Tabs>

</Box>
<Stack direction="row" spacing={2} sx={{ justifyContent: "center",my: 3 }} >
<Avatar
src="https://encrypted-tbn@.gstatic.com/images?q=tbn:ANd9GcSgF2suM5kFwk9AdFjesEr8EP1qcyUvah8G7w&s"/>
<Avatar><Person2 /></Avatar>
<Avatar sx={{backgroundColor:"black"}}>BA</Avatar> </Stack>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-12 text-center ">
                        <img src={`${bottom_option[bottomstate]}`} className="rounded-circle img-fulid"  alt="" />
                    </div>
                </div>
            </div>

            <BottomNavigation
                value={bottomstate}
                onChange={(e, index) => { setbottomstate(index); }}
                showLabels sx={{
                    position: "fixed",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height:100,
                    background: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
                }}>
                <BottomNavigationAction label="Home" icon={<Home />} sx={{ color: "white","&.Mui-selected":{color:"black"} }} />
                <BottomNavigationAction label="Search" icon={<Search />} sx={{ color: "white","&.Mui-selected":{color:"black"} }} />
                <BottomNavigationAction label="Add" icon={<PlusOne />} sx={{ color: "white","&.Mui-selected":{color:"black"} }} />
                <BottomNavigationAction label="Video" icon={<Movie />} sx={{ color: "white","&.Mui-selected":{color:"black"} }} />
                <BottomNavigationAction label="Profile" icon={<Person />} sx={{ color: "white","&.Mui-selected":{color:"black"} }} />
            </BottomNavigation>
        </>
    );
}
