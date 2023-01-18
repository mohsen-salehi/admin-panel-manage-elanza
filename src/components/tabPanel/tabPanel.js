import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs({data}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' , fontFamily : "inherit" }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="manage" {...a11yProps(0)} />
                    <Tab label="finance" {...a11yProps(1)} />
                    <Tab label="inventory" {...a11yProps(2)} />
                    <Tab label="customerService" {...a11yProps(3)} />
                    <Tab label="sellerCenter" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <div className="col-12 d-flex justify-content-between align-items-center p-2 border-bottom rounded-3 d-none d-xl-flex" >
                            <div className="col-2">وضعیت</div>
                            <div className="col-4 text-center">دسته بندی</div>
                            <div className="col-4 text-center">متود</div>
                            <div className="col-2 text-center">یادداشت</div>
                        </div>
                        <div className="col-12 d-flex p-2 justify-content-evenly align-items-center flex-wrap">
                            <label className="col-12 col-xl-2 d-flex justify-content-between align-items-center flex-wrap p-2">
                                <div className="col-5 d-xl-none">وضعیت</div>
                                <input type="checkbox" name="permission" id="permission"/>
                            </label>
                            <label className="col-xl-4 col-12  d-flex justify-content-evenly align-items-center flex-wrap p-2">
                                <div className="col-12 d-xl-none text-center">دسته بندی</div>
                               <span className="alert  text-break text-center m-0 alert-secondary p-2 border ">
                                    App\Http\Controllers\CustomerService\AuthController
                               </span>
                                <i className="icon icon-Left-1 fw-bold"></i>
                            </label>
                            <label className="col-xl-4 col-12  d-flex justify-content-evenly align-items-center flex-wrap p-2">
                                <div className="col-12 d-xl-none text-center">متود</div>
                               <span className="alert text-break text-center m-0 alert-secondary p-2 border">
                                   ["verification","checkVerificationToken","newVerificationToken"]
                               </span>
                                <i className="icon icon-Left-1 fw-bold"></i>
                            </label>
                            <label className="col-xl-2 col-12 d-flex justify-content-evenly align-items-center flex-wrap p-2">
                               <span className="alert m-0 alert-warning p-2 border font-16-rem text-break text-center">
                                   تغییر وضعیت سفارش(پنل cs، ویرایش سفارش)
                               </span>
                            </label>
                        </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                 <div className="col-12 d-flex justify-content-between align-items-center p-2 border-bottom rounded-3">
                            <div className="col-2">وضعیت</div>
                            <div className="col-4">دسته بندی</div>
                            <div className="col-3">متود</div>
                            <div className="col-3">یادداشت</div>
                        </div>
                        <div className="col-12 d-flex p-2 justify-content-evenly align-items-center">
                            <label className="col-2 d-flex justify-content-between align-items-center p-2">
                                <input type="checkbox" name="permission" id="permission"/>
                            </label>
                            <label className="col-4 d-flex justify-content-between align-items-center p-2">

                            </label>
                            <label className="col-3 d-flex justify-content-between align-items-center p-2">
                                <input type="checkbox" name="permission" id="permission"/>
                            </label>
                            <label className="col-3 d-flex justify-content-between align-items-center p-2">
                                <input type="checkbox" name="permission" id="permission"/>
                            </label>
                        </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div className="col-12 d-flex justify-content-between align-items-center p-2 border-bottom rounded-3">
                            <div className="col-2">وضعیت</div>
                            <div className="col-4">دسته بندی</div>
                            <div className="col-3">متود</div>
                            <div className="col-3">یادداشت</div>
                        </div>
                        <div className="col-12 d-flex p-2 justify-content-evenly align-items-center">
                            <label className="col-2 d-flex justify-content-between align-items-center p-2">
                                <input type="checkbox" name="permission" id="permission"/>
                            </label>
                            <label className="col-4  d-flex justify-content-between align-items-center p-2">
                               <span className="alert m-0 alert-secondary p-2 border">
                                    App\Http\Controllers\CustomerService\AuthController
                               </span>
                            </label>
                            <label className="col-3 d-flex justify-content-between align-items-center p-2">
                                <input type="checkbox" name="permission" id="permission"/>
                            </label>
                            <label className="col-3 d-flex justify-content-between align-items-center p-2">
                                <input type="checkbox" name="permission" id="permission"/>
                            </label>
                        </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <div className="col-12 d-flex justify-content-between align-items-center p-2 border-bottom rounded-3">
                            <div className="col-2">وضعیت</div>
                            <div className="col-4">دسته بندی</div>
                            <div className="col-3">متود</div>
                            <div className="col-3">یادداشت</div>
                        </div>
                        <div className="col-12 d-flex p-2 justify-content-evenly align-items-center">
                            <label className="col-2 d-flex justify-content-between align-items-center p-2">
                                <input type="checkbox" name="permission" id="permission"/>
                            </label>
                            <label className="col-4 d-flex justify-content-between align-items-center p-2">

                            </label>
                            <label className="col-3 d-flex justify-content-between align-items-center p-2">
                                <input type="checkbox" name="permission" id="permission"/>
                            </label>
                            <label className="col-3 d-flex justify-content-between align-items-center p-2">
                                <input type="checkbox" name="permission" id="permission"/>
                            </label>
                        </div>
            </TabPanel>
            <TabPanel value={value} index={4}>
                 <div className="col-12 d-flex justify-content-between align-items-center p-2 border-bottom rounded-3">
                            <div className="col-2">وضعیت</div>
                            <div className="col-4">دسته بندی</div>
                            <div className="col-3">متود</div>
                            <div className="col-3">یادداشت</div>
                        </div>
                        <div className="col-12 d-flex p-2 justify-content-evenly align-items-center">
                            <label className="col-2 d-flex justify-content-between align-items-center p-2">
                                <input type="checkbox" name="permission" id="permission"/>
                            </label>
                            <label className="col-4 d-flex justify-content-between align-items-center p-2">

                            </label>
                            <label className="col-3 d-flex justify-content-between align-items-center p-2">
                                <input type="checkbox" name="permission" id="permission"/>
                            </label>
                            <label className="col-3 d-flex justify-content-between align-items-center p-2">
                                <input type="checkbox" name="permission" id="permission"/>
                            </label>
                        </div>
            </TabPanel>
        </Box>
    );
}