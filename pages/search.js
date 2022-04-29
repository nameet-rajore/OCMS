import React, { useEffect, useRef, useState } from 'react'
import { Grid, TextField, Typography, Box } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import Header from '../components/UI/Header';
import Container from '../components/UI/Container';
import SearchCard from '../components/Search/SearchCard';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../src/store';
import CircularProgress from '@mui/material/CircularProgress';



const Search = () => {

    const collegeInputRef = useRef();
    const courseInputRef = useRef();
    const yearInputRef = useRef();
    const professorInputRef = useRef();

    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const[searchItems, setSearchItems] = useState([]);
    
    const [isLoading, setIsLoading] = useState(false);

    const searchHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const response = await fetch(`/api/search?collegeName=${collegeInputRef.current.value}&courseName=${courseInputRef.current.value}&professorName=${professorInputRef.current.value}&year=${yearInputRef.current.value}`,{method:'GET',headers:{"Content-Type": "application/json"}})
        
        if(response.ok&&!!response){
            const data = await response.json();
            if(typeof data=== 'object'){
                const arr =[];
                arr.push(data);
                console.log()
                setSearchItems(arr);
                console.log(arr);
            }
            else{
                setSearchItems(data);
            }
        }
        setIsLoading(false);
    }

    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    useEffect(() => {
        
    });
    return (
        <>
            <Header />
            <Container>
                <form onSubmit={searchHandler}>
                <Box mt={-7} mb={3} p={7} minHeight='70vh' borderRadius={4} minWidth='80rem' sx={{ backgroundColor: '#f5f5f5' }}>
                    <Grid container spacing={3} >
                        <Grid item xs={12} >
                            <Typography variant='h4' fontWeight='500'>
                                Search
                                {isLoading && <CircularProgress size='1.5rem' sx={{px:1.5}} />}
                            </Typography>
                        </Grid>
                        <Grid item xs={2.75} >
                            <TextField variant="outlined" size='small' label="College" fullWidth inputRef={collegeInputRef} />
                        </Grid>
                        <Grid item xs={2.75} >
                            <TextField variant="outlined" size='small' label="Course Name" fullWidth inputRef={courseInputRef} />
                        </Grid>
                        <Grid item xs={2.75} >
                            <TextField variant="outlined" size='small' label="Year" type='number' fullWidth inputRef={yearInputRef} />
                        </Grid>

                        <Grid item xs={2.75} >
                            <TextField variant="outlined" size='small' label="Professor" fullWidth inputRef={professorInputRef} />
                        </Grid>
                        <Grid item xs={1} >
                            <LoadingButton fullWidth disableElevation variant='contained' size='large' type='submit' sx={{ height: '2.5rem' }}>Search</LoadingButton>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} py={3}>
                        {!isLoading && !!searchItems.length && searchItems.map(item => <SearchCard key={Math.random()} college={item.College_name} courseId={item.Course_id} uploadedBy={item.User_name} title={item.Title} cost={item.Cost} rating={Math.random()*5} materialId={item.Material_ID}/>)}
                        {!isLoading && !searchItems.length && <Typography variant='h4' p={4}> There are no search results.</Typography>}
                        
                    </Grid>
                </Box>
                </form>
            </Container>
        </>
    )
}

export default Search