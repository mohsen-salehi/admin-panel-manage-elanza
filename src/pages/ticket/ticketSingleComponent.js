import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import ticketSingleAction from "../../redux/actions/ticket/ticketSingleAction";


function TicketSingleComponent() {

    const dispatch = useDispatch()
    const {id} = useParams()
    useEffect(()=> {
        dispatch(ticketSingleAction(id))
    },[])
    const {ticket} = useSelector(state => state?.ticket?.ticket)
    const [textMessage, setTextMessage] = useState('')
    const pageMessage = useRef()
    const textArea = useRef()
    function sendMessage() {
        if (textMessage.length > 0) {
            pageMessage.current.innerHTML += `
             <div class="col-12 d-flex flex-wrap p-3  my-2">
                     <small class="col-12"> پنل خدمات مشتریان </small>
                     <div class="col-12 col-md-6 d-flex flex-wrap  radius-manual-left p-1   bg-success bg-opacity-50  text-light my-2">
                                    <div class="col-12 text-break p-2">  ${textMessage}</div>
                     </div>
             </div>
        `
            setTextMessage('')
            textArea.current.value = ''
        } else {
            alert()
        }

    }


    return (<>
        <section className="col-12 p-2 px-md-5">
            <div className="col-12 bg-default my-2 p-2 rounded-2 text-white d-flex align-items-center  justify-content-start mt-4 ">
                <h5 className="m-0">
                    مشاهده تیکت -
                    <strong> {ticket?.title} </strong>
                    ({ticket?.state_enum_trans})
                </h5>
            </div>

            <div className="col-12 d-flex justify-content-center flex-wrap">
                <div
                    className="col-12 vh-80  rounded d-flex justify-content-center align-content-between flex-wrap  bg-secondary bg-opacity-25 shadow rounded">
                    <div className="col-12 center mb-3 border-bottom  p-2"> پنل پرسش و پاسخ</div>
                    <div className="col-12 d-flex justify-content-start align-content-start flex-wrap overflow-auto overflow-scroll h-75" ref={pageMessage}>
                        { ticket?.ticket_messages.map((item , index) => (
                                item?.agent === "FRONT" ?
                                    <div className="col-12 d-flex flex-wrap  my-2 justify-content-end px-3 font-14 ">
                                        <small className="col-12 d-flex justify-content-end">{item?.agent} </small>
                                            <div  className="col-12 d-flex flex-wrap my-2 justify-content-end   ">
                                            <div className="col-12 col-md-6 d-flex radius-manual-right flex-wrap p-1  my-2 bg-light ">
                                                <small className="col-12 text-center"></small>
                                                <div className="col-12 text-break  p-2">
                                                    {item?.content}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div key={index}  className="col-12 pageMessage overflow-auto  px-3 font-14">
                                        <div className="col-12 d-flex flex-wrap   my-2">
                                            <small className="col-12"> {item?.agent} </small>
                                            <div
                                                className="col-12 col-md-6 d-flex flex-wrap  radius-manual-left p-1   bg-success bg-opacity-50  text-light my-2">
                                                <div className="col-12 text-break p-2">
                                                    {item?.content}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            )) }
                    </div>
                    <div className="col-12 bg-secondary mt-2 bg-opacity-10 rounded p-3 shadow d-flex justify-content-around align-items-center " style={{height : "10%"}}>
                        <div className="col-1 center   h-100 ">
                            <button className="btn center col-12  display-3  btn-success m-0 h-100   icon icon-Send-2 "
                                    disabled={textMessage.length <= 0} onClick={sendMessage}></button>
                        </div>
                        <label className="col-11 mx-1 center flex-wrap h-100">
                                <textarea name="message" id="message" cols="30" rows="1"
                                          className="col-12  h-100  border-none border-0" placeholder="متن پیام"
                                          ref={textArea} onKeyUp={e => {
                                    setTextMessage(e.target.value)
                                }}></textarea>
                        </label>

                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default TicketSingleComponent;