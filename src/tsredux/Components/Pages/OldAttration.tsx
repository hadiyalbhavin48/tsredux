

// ------------------ AttrationSlice.tsx ------------------------




// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'
// import { RootState } from '../Store/store';


// export interface IAttractions {
//     loading: boolean;
//     error: string | undefined;
//     attractions: any[];
//     isEditSelect: {};
//     filterAttraction: any[];
//     // perPag: any;
//     // pgNo: any;
//     filterPage: any[];
//     filterTxt: any[];
//     pgNo: number | null;
//     pagNoPer: number | null;
//     searchTxt: string;
// }

// const initialState: IAttractions = {
//     loading: false,
//     error: '',
//     attractions: [],
//     isEditSelect: {},
//     filterAttraction: [],
//     filterPage : [],
//     filterTxt : [],
//     pgNo : null,
//     pagNoPer : null,
//     searchTxt : ''
// }


// // create Action get Attration

// export const getAttraction = createAsyncThunk(
//     "getAttraction",
//     async (data, { rejectWithValue }) => {
//         try {
//             const attrationApi = await axios.get("https://www.melivecode.com/api/attractions")
//             // console.log("get attrationApi", attrationApi.data);
//             return attrationApi.data
//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

// // create Add Attration

// export const addAttration = createAsyncThunk(
//     "addAttration",
//     async (dataAttr: any, { rejectWithValue }) => {
//         console.log("dataAttr ", dataAttr);

//         const token = localStorage.getItem("tokens")
//         // console.log("token " , token);

//         try {
//             const addAttratioApi = await axios.post("https://www.melivecode.com/api/auth/attractions/create", dataAttr, {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             })

//             console.log("addAttratioApi ", await addAttratioApi.data.attraction
//             );

//             return addAttratioApi.data.attraction
//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )

// // create Action Delete 

// export const deleteAttraction = createAsyncThunk(
//     "deleteAttraction",
//     async (userId: number, { rejectWithValue }) => {
//         // console.log("slice delete Id " , dataId);

//         try {

//             const token = localStorage.getItem("tokens")
//             await axios.delete("https://www.melivecode.com/api/auth/attractions/delete",
//                 {
//                     data: {
//                         id: userId,
//                     },
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 })
//             return userId

//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )


// export const updateAttraction = createAsyncThunk(
//     "updateAttraction",
//     async (updateUSer: any, { rejectWithValue }) => {
//         try {
//             const token = localStorage.getItem("tokens")
//             const updateApi = await axios.put("https://www.melivecode.com/api/auth/attractions/update", updateUSer, {
//                 headers: {
//                     Authorization: `Brearer ${token}`
//                 }
//             })

//             console.log("updateApi", updateApi.data.attraction);


//             return updateApi.data.attraction
//         } catch (error) {
//             return rejectWithValue(error)
//         }
//     }
// )


// // Sorting



// export const paginationApi = createAsyncThunk(
//     'paginationApi',
//     async (data, { rejectWithValue , getState }) => {

//         const state = getState() as RootState
//       const { pgNo, pagNoPer, searchTxt } = state.attractionsData;
//       if (pgNo && pagNoPer) {
//         const pgApi = await axios.get(`https://www.melivecode.com/api/attractions?page=${pgNo}&per_page=${pagNoPer}&sort_column=1`);
//         return pgApi.data.data;
//       } else if (pgNo) {
//         const perPage = 10;
//         const pgApi = await axios.get(`https://www.melivecode.com/api/attractions?page=${pgNo}&per_page=${perPage}&sort_column=1`);
//         return pgApi.data.data;
//       } else if (pagNoPer) {
//         const pgApi = await axios.get(`https://www.melivecode.com/api/attractions?page=1&per_page=${pagNoPer}&sort_column=1`);
//         return pgApi.data.data;
//       } else if (searchTxt) {
//         const txtApi = await axios.get(`https://www.melivecode.com/api/attractions?search=${searchTxt}`);
//         return txtApi.data;
//       }
//       return [];
//     }
//   );


// export const attractionsDetails = createSlice({
//     name: "attractionsDetails",
//     initialState,
//     reducers: {
//         setEditAttrData: (state, action) => {
//             //    console.log("reducers Edit Data " , action.payload);
//             state.isEditSelect = action.payload
//         },

//         setPgNo: (state, action) => {
//             state.pgNo = action.payload;
//           },
//           setPagNoPer: (state, action) => {
//             state.pagNoPer = action.payload;
//           },
//           setSearchTxt: (state, action) => {
//             state.searchTxt = action.payload;
//           },
//     },
//     extraReducers: (builder) => {

//         // Get Attration
//         builder.addCase(getAttraction.pending, (state) => {
//             state.loading = true;
//         })

//         builder.addCase(getAttraction.fulfilled, (state, action) => {
//             state.loading = false;
//             // console.log("get Attration fullfuild "  , action.payload);
//             state.attractions = action.payload

//         })

//         builder.addCase(getAttraction.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message
//         })

//         // Add Attration

//         builder.addCase(addAttration.pending, (state) => {
//             state.loading = false
//         })

//         builder.addCase(addAttration.fulfilled, (state, action) => {
//             state.loading = false;
//             state.attractions = [...state.attractions, action.payload]
//         })

//         builder.addCase(addAttration.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message
//         })

//         // delete Attraction

//         builder.addCase(deleteAttraction.pending, (state) => {
//             state.loading = true;

//         })

//         builder.addCase(deleteAttraction.fulfilled, (state, action) => {
//             state.loading = false;
//             // console.log("delete Store ", action.payload);

//             state.attractions = state.attractions.filter((eml) => eml.id !== action.payload)

//         })

//         builder.addCase(deleteAttraction.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message
//             console.log("delete Error ", action.error.message);

//         })

//         builder.addCase(updateAttraction.pending, (state) => {
//             state.loading = true;
//         })

//         builder.addCase(updateAttraction.fulfilled, (state, action) => {
//             state.loading = false;
//             // console.log("update id ", action);
//             // state.attractions = (state.attractions).map(elm => elm.id === action.payload.id ? action.payload : elm)
//             state.attractions = (state.attractions ?? []).map(elm => elm.id === action.payload.id ? action.payload : elm);

//         })

//         builder.addCase(updateAttraction.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message;
//         })

//         // Sorting


//         builder.addCase(paginationApi.fulfilled, (state, action) => {
//             state.filterPage = action.payload;
//           });


//     }
// })

// export const { setEditAttrData, setPgNo, setPagNoPer, setSearchTxt } = attractionsDetails.actions;
// export default attractionsDetails.reducer







import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../Store/hooks'
import { IAttractions, addAttration, deleteAttraction, getAttraction, paginationApi, setEditAttrData, setPagNoPer, setPgNo, setSearchTxt, updateAttraction } from '../../Slice/AttractionsSlice'
import { Button, Layout, Spin, Modal, Form, Input } from 'antd';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from 'ag-grid-react';
import { useForm } from 'antd/es/form/Form';

const { Header } = Layout
const Attractions = () => {

  // const [filterPg, setFilterPg] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelTitle, setModelTitle] = useState('')
  const [editBtn, setEditBtn] = useState(false)
  const [prPag, setPrPage] = useState('')
  const [pagN, setPagN] = useState('')

  const dispatch = useAppDispatch()

  const [form] = Form.useForm()
  const formRef = React.useRef(form)


  const attrationList = useAppSelector(state => state.attractionsData)
  const attrationsDataList = attrationList.attractions
  const isLoading = attrationList.loading
 
  const editSelectId: { id?: number } = useAppSelector(state => state.attractionsData.isEditSelect) || {};

  const columnDefs: any = [
    {
      headerName: "id", field: "id", filter: "agTextColumnFilter", width: 100
    },
    {
      headerName: "coverimage",
      cellRenderer: (param: any) => {
        const imgUrl = param.data?.coverimage
        //  console.log("imgUrl " , imgUrl);
        return (
          <img src={imgUrl} alt='' style={{ width: "30%" }} />
        )
      }
    },

    { headerName: "Name", field: "name", filter: "agTextColumnFilter" },
    {
      headerName: "latitude", field: "latitude", filter: "agTextColumnFilter", width: 130
    },
    {
      headerName: "longitude", field: "longitude", filter: "agTextColumnFilter", width: 130
    },
    {
      headerName: "Details",
      field: "detail",
      width: 350,
      filter: "agTextColumnFilter",
      wrapText: true,
    },

    {
      headerName: "Action",
      cellRenderer: (param: any) => {
        return (
          <>
            <Button
              type='primary'
              onClick={() => editAttri(param.data)}
              className='me-2'
            >Edit</Button>
            <Button
              type='primary'
              onClick={() => deleteAttri(param.data)}
              danger
            >Delete</Button>
          </>
        )
      },
      suppressSorting: true,
      suppressMenu: true,
    }
  ]


  const defaultColDef = {
    sortable: true,
    filter: true,      // floatingFilter: true,
    floatingFilter: true,
  }

  const gridOptions = {
    rowHeight: 70,
    pagination: true,
    paginationPageSize: 5,
  };

  // Add Attration

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    form.setFieldsValue({})
    formRef.current.resetFields()
    // form.setFieldsValue({});
    setIsModalOpen(false);
  };

  const showAddModal = () => {
    setModelTitle("Add Attractions")
    setEditBtn(false)
    showModal();
  }

  const onAddFinish = (values: any) => {
    // console.log("success Add ", values);

    let latitudenum = parseFloat(values.latitude);
    // console.log(`${latitudenum}` + " is of type :" + typeof latitudenum);

    let longitudenum = parseFloat(values.longitude);
    const newValue = {
      ...values,
      latitude: latitudenum,
      longitude: longitudenum,
      coverimage: "https://www.melivecode.com/attractions/1.jpg"
    }

    console.log("success Add ", newValue);

    // console.log("success Add ", parseFloat(newValue.latitude));
    // console.log("latitude type ", typeof newValue.latitude);

    dispatch(addAttration(newValue))
    handleCancel()
  }

  const onAddFinishFailed = (errorInfo: any) => {
    console.log("Add Error ", errorInfo);

  }

  const editAttri = (values: any) => {
    // console.log("Edit Data ", values);


    setModelTitle("Edit Attractions")
    form.setFieldsValue(values)
    setEditBtn(true)

    dispatch(setEditAttrData(values))
    showModal()
  }

  const onEditFinish = (values: any) => {
    // console.log("Edit success ", values);

    let latitudenum = parseFloat(values.latitude);
    let longitudenum = parseFloat(values.longitude);

    const newVal = {
      ...values,
      latitude: latitudenum,
      longitude: longitudenum,
      id: editSelectId.id
    }
    // console.log("newVal " , newVal);

    dispatch(updateAttraction(newVal))
    handleCancel()
  }

  const onEditFinishFaild = (errorInfo: any) => {
    console.log("Edit Error ", errorInfo);
  }

  // Delete Attraction

  const deleteAttri = (values: any) => {
    // console.log("delete " , values.id);
    dispatch(deleteAttraction(values.id))
  }

  // Sorting and Filterting using Api

  const pageNoInput = (e: any) => { 
    dispatch(setPagNoPer(e.target.value));
    // setPerPage(e.target.value)
    dispatch(paginationApi());
  };
  const pageInput = (e: any) => {
    dispatch(setPgNo(e.target.value));
    dispatch(paginationApi());
  };

    const nameSearch = (e: any) => {
    dispatch(setSearchTxt(e.target.value));
    dispatch(paginationApi());
  };

  useEffect(() => {
    dispatch(getAttraction())

  }, [])

  return (
    <div>

      <Header style={{ color: "white", fontWeight: "bold", width: "100%" }} className='ms-2'>Attractions/Places</Header>

      <div className='mt-2 ms-2' >
        <Button
          onClick={showAddModal}
          type="primary"
          style={{ float: "left" }}
        >
          Add
        </Button>
        <div className='mt-2'>
          <Input
            onChange={pageNoInput}
            placeholder='Enter Per Page No'
            className='mt-2 me-2'
            style={{ width: "20%" }}
          />

          <Input
           onChange={pageInput}
            placeholder='Enter Page No'
            className='mt-2 me-2'
            style={{ width: "20%" }}
          />

          <Input
           onChange={nameSearch}
            placeholder='Enter Name'
            className='mt-2'
            style={{ width: "20%" }}
          />
        </div>
      </div>

      <div className="ag-theme-alpine rowHoverColor mt-3 ms-2" style={{ textAlign: "left" }}>
        <Spin spinning={isLoading} tip="Loading...">
          {/* {
          filterData ? ( 
          <AgGridReact
            rowData={filterData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            gridOptions={gridOptions}
            domLayout="autoHeight"
          ></AgGridReact>
          ) :
          (
          <AgGridReact
            rowData={attrationsDataList}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            gridOptions={gridOptions}
            domLayout="autoHeight"
          ></AgGridReact>
          )
          rowData={filterData?.length ? filterData : attrationsDataList}
           
        } */}

          <AgGridReact
            rowData={attrationsDataList}
            // rowData={filterData}
            // rowData={filterData == null ? attrationsDataList : filterData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            gridOptions={gridOptions}
            domLayout="autoHeight"
          ></AgGridReact>

        </Spin>
      </div>

      <Modal
        title={modelTitle}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          onFinish={editBtn ? onEditFinish : onAddFinish}
          onFinishFailed={editBtn ? onEditFinishFaild : onAddFinishFailed}
          autoComplete="off"
        // layout="vertical"
        // style={{ overflow: "scroll", height: "300px" }}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your Name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Latitude"
            name="latitude"
            rules={[{ required: true, message: 'Please input your Latitude!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Longitude"
            name="longitude"
            rules={[{ required: true, message: 'Please input your longitude!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Details"
            name="detail"
            rules={[{ required: true, message: 'Please input your Details!' }]}
          >
            <Input />
          </Form.Item>


          <Form.Item>

            {
              editBtn && editBtn ? (
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              )
                :
                (
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                )
            }

            <Button type="primary" onClick={handleCancel} danger className='ms-2'>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default Attractions


