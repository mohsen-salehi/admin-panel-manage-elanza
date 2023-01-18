import React, {useState} from "react";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import {Link} from "react-router-dom";

function Categories() {
    const myData = [
        {
            id: '1',
            name: 'yellow',
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvdcRFWMOtCZleRqU8AU27MxyFQJf7zgZdw&usqp=CAU"
        },
        {
            id: '2',
            name: 'red',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw5PqMRgW19mAUrJRH8fUMGmqExxTm-JcI-A&usqp=CAU'
        }
    ]

    const [characters, setCharacters] = useState(myData)
    const [statusItem, setStatusItem] = useState('three')

    function handelDragEnd(result) {


        const items = Array.from(characters);
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)

        setCharacters(items)
    }

    return (
        <>
            <section
                className="col-12 d-flex justify-content-center align-items-start flex-wrap font-16-rem align-content-between">
                <div className="col-12 d-flex justify-content-between align-items-center border-bottom rounded">
                    <h4 className="py-3 py-md-2 px-2">
                        دسته بندی ها
                    </h4>
                </div>
                <div className="d-flex col-12 p-3 border-bottom justify-content-end  rounded-pill">
                    <button className="btn btn-outline-secondary d-flex align-items-center  mx-1"
                            onClick={e => statusItem === 'three' ? setStatusItem('list') : setStatusItem('three')}
                    >
                        <i className="icon icon-Arrow-Swap-Vertical"></i>
                        {
                            statusItem === 'three' ? 'ساختار لیست' : "ساختار درختی"
                        }
                    </button>
                    <button className="btn btn-outline-success d-flex align-items-center mx-1">
                        <i className="icon icon-Add1"></i>
                        جدید
                    </button>
                </div>
            </section>
            <section className="col-12 p-2">
                {
                    statusItem === 'three' ?
                        <div className="col-12 d-flex justify-content-between align-content-between">
                            <div className="col-12 p-3 rounded shadow d-flex justify-content-start align-items-center">
                                <DragDropContext onDragEnd={handelDragEnd}>
                                    <Droppable droppableId="droppable">
                                        {
                                            (provided, snapshot) => (
                                                <div
                                                    className="characters col-12 d-flex m-auto p-0 list-unstyled d-flex justify-content-center flex-wrap" {...provided.droppableProps}
                                                    ref={provided.innerRef}>
                                                    {
                                                        characters.map((items, index) => (
                                                            <Draggable key={items.id} draggableId={items.id}
                                                                       index={index}>
                                                                {
                                                                    (provided, snapshot) => (
                                                                        <div ref={provided.innerRef}
                                                                             {...provided.draggableProps}
                                                                             {...provided.dragHandleProps}
                                                                             className="p-4 border rounded  col-7 my-2 d-flex justify-content-center align-items-center">
                                                                            <div className="accordion col-12"
                                                                                 id="accordionPanelsStayOpenExample">
                                                                                <div className="accordion-item">
                                                                                    <h2 className="accordion-header"
                                                                                        id={`panelsStayOpen-heading${items?.id}`}>
                                                                                        <button
                                                                                            className="accordion-button"
                                                                                            type="button"
                                                                                            data-bs-toggle="collapse"
                                                                                            data-bs-target={`#panelsStayOpen-collapse${items?.id}`}
                                                                                            aria-expanded="true"
                                                                                            aria-controls={`panelsStayOpen-collapse${items?.id}`}>
                                                                                            Accordion Item #1
                                                                                        </button>
                                                                                    </h2>
                                                                                    <div
                                                                                        id={`panelsStayOpen-collapse${items?.id}`}
                                                                                        className="accordion-collapse collapse show"
                                                                                        aria-labelledby={`panelsStayOpen-heading${items?.id}`}>
                                                                                        <div className="accordion-body">
                                                                                            <strong>This is the first
                                                                                                item's
                                                                                                accordion
                                                                                                body.</strong> It is
                                                                                            shown by default, until the
                                                                                            collapse
                                                                                            plugin adds the appropriate
                                                                                            classes
                                                                                            that we use to style each
                                                                                            element.
                                                                                            These classes control the
                                                                                            overall
                                                                                            appearance, as well as the
                                                                                            showing
                                                                                            and hiding via CSS
                                                                                            transitions. You
                                                                                            can modify any of this with
                                                                                            custom
                                                                                            CSS or overriding our
                                                                                            default
                                                                                            variables. It's also worth
                                                                                            noting
                                                                                            that just about any HTML can
                                                                                            go
                                                                                            within
                                                                                            the <code>.accordion-body</code>,
                                                                                            though the transition does
                                                                                            limit
                                                                                            overflow.
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="accordion-item">
                                                                                    <h2 className="accordion-header"
                                                                                        id="panelsStayOpen-headingTwo">
                                                                                        <button
                                                                                            className="accordion-button collapsed"
                                                                                            type="button"
                                                                                            data-bs-toggle="collapse"
                                                                                            data-bs-target="#panelsStayOpen-collapseTwo"
                                                                                            aria-expanded="false"
                                                                                            aria-controls="panelsStayOpen-collapseTwo">
                                                                                            Accordion Item #2
                                                                                        </button>
                                                                                    </h2>
                                                                                    <div id="panelsStayOpen-collapseTwo"
                                                                                         className="accordion-collapse collapse"
                                                                                         aria-labelledby="panelsStayOpen-headingTwo">
                                                                                        <div className="accordion-body">
                                                                                            <strong>This is the second
                                                                                                item's
                                                                                                accordion
                                                                                                body.</strong> It is
                                                                                            hidden by default, until the
                                                                                            collapse plugin adds the
                                                                                            appropriate
                                                                                            classes that we use to style
                                                                                            each
                                                                                            element. These classes
                                                                                            control the
                                                                                            overall appearance, as well
                                                                                            as the
                                                                                            showing and hiding via CSS
                                                                                            transitions. You can modify
                                                                                            any of
                                                                                            this with custom CSS or
                                                                                            overriding
                                                                                            our default variables. It's
                                                                                            also
                                                                                            worth noting that just about
                                                                                            any
                                                                                            HTML can go within
                                                                                            the <code>.accordion-body</code>,
                                                                                            though the transition does
                                                                                            limit
                                                                                            overflow.
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="accordion-item">
                                                                                    <h2 className="accordion-header"
                                                                                        id="panelsStayOpen-headingThree">
                                                                                        <button
                                                                                            className="accordion-button collapsed"
                                                                                            type="button"
                                                                                            data-bs-toggle="collapse"
                                                                                            data-bs-target="#panelsStayOpen-collapseThree"
                                                                                            aria-expanded="false"
                                                                                            aria-controls="panelsStayOpen-collapseThree">
                                                                                            Accordion Item #3
                                                                                        </button>
                                                                                    </h2>
                                                                                    <div
                                                                                        id="panelsStayOpen-collapseThree"
                                                                                        className="accordion-collapse collapse"
                                                                                        aria-labelledby="panelsStayOpen-headingThree">
                                                                                        <div className="accordion-body">
                                                                                            <strong>This is the third
                                                                                                item's
                                                                                                accordion
                                                                                                body.</strong> It is

                                                                                            HTML can go within
                                                                                            the <code>.accordion-body</code>,
                                                                                            though the transition does
                                                                                            limit
                                                                                            overflow.
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    )
                                                                }
                                                            </Draggable>
                                                        ))
                                                    }
                                                    {provided.placeholder}
                                                </div>
                                            )
                                        }
                                    </Droppable>
                                </DragDropContext>
                            </div>
                        </div>
                        :
                        <div className="col-12 shadow rounded">
                            <div
                                className="col-12 d-none d-md-flex justify-content-between p-3 rounded mt-2 border-bottom ">
                                <div className="col-2 d-flex justify-content-center">تصویر</div>
                                <div className="col-3 d-flex justify-content-center">والد</div>
                                <div className="col-3 d-flex justify-content-center">عنوان</div>
                                <div className="col-1 d-flex justify-content-center">وضعیت</div>
                                <div className="col-2 d-flex justify-content-center">عملیات</div>
                            </div>

                            <div
                                className="col-12 d-flex flex-wrap  justify-content-between p-3 p-xl-1 my-2 rounded shadow-sm border-bottom font-16-rem">
                                <div
                                    className="col-12 justify-content-between col-md-2 d-flex  align-items-center justify-content-xl-center  my-1">
                                    <span className="d-xl-none ">تصویر:</span>
                                    <figure className="col-2 col-xl-3 p-0 m-0">
                                        <img className="img-fluid rounded shadow-sm"
                                             src="https://static.elanza.com/media/setting/tag-2/2022/10/31/54198/8fe427af6aedf8b3d17f68101e338e3c.jpg"
                                             alt=""/>
                                    </figure>
                                </div>
                                <div
                                    className="col-12 justify-content-between col-md-3 d-flex align-items-center flex-wrap justify-content-xl-center my-1">
                                    <span className="d-xl-none">والد : </span>
                                    <span>
                                   Men-Ankle-Bootsپوشاک > کفش > مردانه > نیم بوت >

                                </span>
                                </div>
                                <div
                                    className="col-12 justify-content-between col-md-3 d-flex  align-items-center flex-wrap justify-content-xl-center font-FaNum-Medium my-1">
                                    <span className="d-xl-none">عنوان :</span>
                                    <span>
                                   <strong>category new</strong>
                                    <br /> category new

                                </span>
                                </div>
                                <div
                                    className="col-12 justify-content-between col-md-1 d-flex align-items-center  justify-content-xl-center my-1">
                                    <span className="d-xl-none">وضعیت :</span>
                                    <span>
                                  غیر فعال
                                </span>
                                </div>
                                <div className="col-12 justify-content-center col-md-2 d-flex align-items-center  my-1">
                                    <div>
                                        <Link to="category-show" className="btn btn-warning font-14-rem mx-1">  نمایش </Link>
                                        <Link to="/category-edit" className="btn btn-info font-14-rem text-light "> ویرایش</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                }


            </section>
        </>
    );
}

export default Categories;