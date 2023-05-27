import './App.css';
import {
  AppBar,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  Toolbar,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import {useState} from "react";



function App() {

  const [userInput, setUserInput] = useState('None');

  const Blog = ({title, abstract, content,imageUrl}) => {
    return (
        <Card sx={{display:'flex', flexDirection:'column', maxWidth: 450, height:425}}>
          <CardMedia sx={{height:'100%', width:'100%'}} title={title} image={imageUrl}/>
          <CardContent sx={{flexGrow:1}}>
            <Typography variant="h5" color="#000000">
              {title}
            </Typography>
            <Typography variant="body2" color="#555555">
              {abstract}
            </Typography>
          </CardContent>
        </Card>
    )
  }
  const cityBlogs = [
    {title:'Marvelous Dubai Indeed',
      abstract:'Come with us to experience the magic of this oasis in the desert', content:'Lorem Ipsum', city:'Dubai',
    imageUrl: "/assets/images/dubai.jpg"},
    {title:'Tech-Savy Mumbai',
      abstract:'Exploring the technology advancements keeping the city alive', content:'Lorem Ipsum', city:'Mumbai',
      imageUrl: "/assets/images/mumbai.jpg"},
    {title:'The Ocean Playground in Halifax',
      abstract:'Enjoy the vast marine wildlife with us', content:'Lorem Ipsum', city:'Halifax',
      imageUrl: "/assets/images/halifax.jpg"}
  ]
  const filterCities = userInput === 'None' ? cityBlogs : cityBlogs.filter((blog)=>blog.city===userInput)

  const durationBlogs = [
    {title:'10 Day trip to Ahmedabad',
      abstract:'Come with us to experience the historical wonders of this World Heritage City',
      content:'Lorem Ipsum', duration:'10', imageUrl: "/assets/images/ahmedabad.jpg"},
    {title:'2 Day Mumbai Local',
      abstract:'Exploring the Dabawallas in their natural element',
      content:'Lorem Ipsum', duration:'2', imageUrl: "/assets/images/mumbai-local.jpg"},
    {title:'15 Days in the World Capital: New York',
      abstract:'Lets understand the culinary and financial gems in The Big Apple',
      content:'Lorem Ipsum', duration:'15',imageUrl: "/assets/images/new-york.jpg"}
  ]
  const filterDurations = userInput === 'None' ? durationBlogs : durationBlogs.filter((blog)=>blog.duration===userInput)


  return (
    <div className="App">
      <AppBar position="static" sx={{ bgcolor: "#FEFEFA" }}>
        <Toolbar>
          <TextField id="outlined-basic" label="Search" variant="outlined" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}} color="#000000" fontFamily="Calibri">
            Following
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="#000000" fontFamily="Calibri">
            Notifications
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="#000000" fontFamily="Calibri">
            User Profile
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="#C0C0C0" fontFamily="Calibri">
            Travel Guide
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="#000000" fontFamily="Calibri">
            Featured Articles
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="#000000" fontFamily="Calibri">
            Logout
          </Typography>
          <IconButton
              color="black"
              aria-label="menu"
              sx={{ flexGrow: 1}}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <section style={{backgroundColor:"#FDEE00", padding:"5rem", display:"block", alignItems:"center", height:"30vh"}}>
        <Typography variant="h1" component="div" sx={{ flexGrow: 1, mx:'auto' }} color="#000000" fontFamily="Calibri" >
          Travel Guide
        </Typography>
        <Typography variant="h2" component="div" sx={{ flexGrow: 1, mx:'auto' }} color="#000000" fontFamily="Calibri">
          See what's pop'n in the travel community
        </Typography>
      </section>

      <section style={{backgroundColor:"#FDEE00", padding:"1rem", height:"5vh"}}>
        <Button value="Dubai" onClick={()=>setUserInput("Dubai")} variant="contained"
                style={{backgroundColor:"#FEFEFA", color:"#000000", marginRight:"1rem"}}>
          Dubai
        </Button>
        <Button value="Lodon" onClick={()=>setUserInput("London")} variant="contained"
                style={{backgroundColor:"#FEFEFA", color:"#000000", marginRight:"1rem"}}>
          London
        </Button>
        <Button value="Mumbai" onClick={()=>setUserInput("Mumbai")} variant="contained"
                style={{backgroundColor:"#FEFEFA", color:"#000000", marginRight:"1rem"}}>
          Mumbai
        </Button>
        <Button value="Halifax" onClick={()=>setUserInput("Halifax")} variant="contained"
                style={{backgroundColor:"#FEFEFA", color:"#000000", marginRight:"4rem"}}>
          Halifax
        </Button>
        <Button value="N" onClick={()=>setUserInput("None")} variant="contained"
                style={{backgroundColor:"#FEFEFA", color:"#000000"}}>
          Reset selection
        </Button>
      </section>

      <section style={{backgroundColor:"#F0F8FF", padding:"1rem", height:"5vh"}}>
        <Button value="2" onClick={()=>setUserInput("2")} variant="contained"
                style={{backgroundColor:"#000000", color:"#FEFEFA", marginRight:"1rem"}}>
          2-Day Trips
        </Button>
        <Button value="5" onClick={()=>setUserInput("5")} variant="contained"
                style={{backgroundColor:"#000000", color:"#FEFEFA", marginRight:"1rem"}}>
          5-Day Trip
        </Button>
        <Button value="7" onClick={()=>setUserInput("7")} variant="contained"
                style={{backgroundColor:"#000000", color:"#FEFEFA", marginRight:"1rem"}}>
          7-day Trip
        </Button>
        <Button value="15" onClick={()=>setUserInput("15")} variant="contained"
                style={{backgroundColor:"#000000", color:"#FEFEFA", marginRight:"4rem"}}>
          15-day Trip
        </Button>
        <Button value="N" onClick={()=>setUserInput("None")} variant="contained"
                style={{backgroundColor:"#000000", color:"#FEFEFA"}}>
          Reset selection
        </Button>
      </section>

      <Grid container spacing={3}>
          {filterCities.map((post, index)=>(
              <Grid item xs={12} sm={6} md={4} key={index}>
                {Blog({title:post.title,abstract:post.abstract,imageUrl:post.imageUrl,content:""})}
              </Grid>
          ))}
      </Grid>

      <Grid container spacing={3}>
        {filterDurations.map((post, index)=>(
            <Grid item xs={12} sm={6} md={4} key={index}>
              {Blog({title:post.title,abstract:post.abstract,content:"",imageUrl:post.imageUrl})}
            </Grid>
        ))}
      </Grid>

    </div>
  );
}

export default App;
