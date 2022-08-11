import React from "react";
import "./Products.css";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { BiEditAlt } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { MdModeEdit } from "react-icons/md";
import { Header } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Page,
    Selection,
    Inject,
    Edit,
    Toolbar,
    Sort,
    Filter,
} from "@syncfusion/ej2-react-grids";
import api from "../../api/api";
import { productsData, productsGrid } from "../../data/dummy";
import { useEffect } from "react";

const Products = () => {
    let navigate = useNavigate();
    const selectionsettings = { persistSelection: true };
    const [data, setData] = useState([]);
    useEffect(() => {
        api.get("/books")
            .then((res) => {
                var temp = [...res.data];

                temp = temp.map((one) => ({
                    ...one,
                    open: (
                        <Link to={`/books/${one._id}`}>
                            <MdModeEdit />
                        </Link>
                    ),
                }));

                setData(temp);
            })
            .catch((res) => console.log(res));
    }, []);

    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Page" title="Books" />
            <button
                onClick={() => {
                    navigate("/addproducts");
                }}
                className="rounded-xl m-3 p-3 bg-red-400 hover:bg-orange-600 "
            >
                Add new Book
            </button>
            <GridComponent
                dataSource={data}
                enableHover={false}
                allowPaging
                pageSettings={{ pageCount: 5 }}
                selectionSettings={selectionsettings}
                allowSorting
            >
                {/*
                toolbar={["Delete"]}
                editSettings={{ allowDeleting: true, allowEditing: true }}
              */}

                <ColumnsDirective>
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    {productsGrid?.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
            </GridComponent>
            //
        </div>
    );
};

export default Products;
