import {Container, Grid} from "@material-ui/core";
import styles from "../../join.module.css";
import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import {createTheme, makeStyles, ThemeProvider} from "@material-ui/core/styles";
import {green} from "@material-ui/core/colors";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {BiPlusCircle} from "@react-icons/all-files/bi/BiPlusCircle";
import {RiDeleteBin5Line} from "@react-icons/all-files/ri/RiDeleteBin5Line";


export default function Join1() {
    const [inputList, setInputList] = useState([{ shop_type: "", link: "" , custom: ""  }]);

    // console.log(inputList.length);
    // handle input change
    const [shop_type, setShop_type] = React.useState('');
    const [shop_type_custom, setShop_type_custom] = useState(false);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);

        setShop_type(list[index].shop_type);
        if(list[index].shop_type == 'custom' ){
            setShop_type_custom(true)
        }else{
            setShop_type_custom(false)
        }
        // console.log(list[index].shop_type)
        console.log(shop_type_custom[0])
        console.log(shop_type_custom[1])
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { shop_type: "", link: "" , custom: "" }]);
    };

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',

        },
        margin: {
            margin: theme.spacing(1),
            width:'70%',
            border: '1px solid #C8C7CC',
            boxSizing: 'border-box',
            borderRadius: '12px',
            outline:'none'

        },
    }));
    const classes = useStyles();

    const theme = createTheme({
        palette: {
            primary: green,
        },
    });
    const styleback = {
        boxShadow: '8px 28px 74px rgba(184, 54, 0, 0.12)',
        borderRadius: '16px',
        padding: '15px 30px',
        background:'#fff',
        marginTop:'20px'
    }
    // const [shop_type, setShop_type] = React.useState('');
    // const [shop_type_custom, setShop_type_custom] = useState(false);
    // const handleShop_type = (event) => {
    //     setShop_type(event.target.value);
    //     if(event.target.value == 'custom' ){
    //         setShop_type_custom(true)
    //     }else{
    //         setShop_type_custom(false)
    //     }
    //     console.log(event.target.value)
    //     console.log(shop_type_custom)
    // };
    console.log(inputList.length)
    return (
        <Grid container  alignItems="center" justify="center" style={styleback}>
            <Grid column lg={12} md={12} sm={12} xs={12} spacing={3} >
                <Grid container>
                    <Grid column lg={6} md={6} sm={12} xs={12} spacing={3} className={styles.regForm}>
                        <h2>Online store links</h2>
                    </Grid>
                </Grid>
                {inputList.map((x, i) => {
                    return (
                        <>
                            <Grid container className="box">
                                <Grid column lg={4} md={4} sm={12} xs={12} spacing={3} style={{}}>
                                    <FormControl variant="outlined"  style={{width:'100%'}}>
                                        <InputLabel id="shop_type-label" style={{}}>* Shop type</InputLabel>
                                        <Select
                                            onChange={e => handleInputChange(e, i)}
                                            labelId="shop_type-label"
                                            className={classes.margin}
                                            id="shop_type"
                                            name="shop_type"
                                            value={x.shop_type}
                                            label="shop_type-label"
                                        >
                                            <MenuItem value="">
                                            <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={'custom'}>Custom</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>


                                </Grid>
                                <Grid column lg={8} md={8} sm={12} xs={12} spacing={3} style={{textAlign:'center'}}>
                                    <TextField
                                        className={classes.margin}
                                        // className={classes.margin}
                                        label="* HTML link"
                                        variant="outlined"
                                        id="link"
                                        name="link"
                                        value={x.link}
                                        onChange={e => handleInputChange(e, i)}
                                        // fullWidth = 'true'
                                    />
                                    {i > 0 ? < RiDeleteBin5Line className={styles.delRow}  onClick={() => handleRemoveClick(i)} />  : ''}


                                </Grid>
                            </Grid>
                            {inputList[i].shop_type ==  'custom' ?  <Grid container > <Grid column lg={12} md={12} sm={12} xs={12} spacing={3} >  <TextField onChange={e => handleInputChange(e, i)} className={classes.margin} style={{width:'89%'}} label="* Custom" id="custom" name="custom" variant="outlined" value={x.custom} />  </Grid></Grid> : ''}
                        </>
                );
                })}
                <Grid container>
                    <Grid column lg={6} md={6} sm={12} xs={12} spacing={3}>
                        <h2 className={styles.addNewInput} onClick={handleAddClick}> <BiPlusCircle /> Add new conection</h2>
                    </Grid>
                </Grid>
            </Grid>
            {/*<div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>*/}
{/*\*/}
        </Grid>


    )
}