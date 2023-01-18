import React from 'react';
import BasicTabs from "../../components/tabPanel/tabPanel";
function RolePermission() {
    return (
        <>
            <section className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between p-2">
                <section className="col-12 d-flex justify-content-between align-items-center  rounded">
                    <div className="col-12 d-flex flex-wrap justify-content-end align-items-center p-2">
                        <h5 className="col-12 border-bottom rounded p-2">نقش marketingAssistance</h5>
                    </div>
                </section>
                <section className="col-12 d-flex justify-content-center align-items-center flex-wrap  rounded">
                    {/*list*/}
                    <div className="col-12 font-FaNum-Medium d-flex justify-content-between flex-wrap p-1 shadow-sm rounded">
                        <h6 className="col-12 bg-default p-3 rounded-3 text-white">تعداد دسترسی ها (17)</h6>
                        <BasicTabs data={''}/>
                    </div>
                </section>
            </section>
        </>
    );
}

export default RolePermission;