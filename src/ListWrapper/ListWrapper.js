import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import PersonForm from "./PersonForm";

function Filters({ dispatch }) {
  return (
    <div>
      <input
        placeholder="Search here...."
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FILTER",
            filter: { search: e.target.value },
          })
        }
      />
      <input type="checkbox" />
      FirstName
      <input type="checkbox" />
      Lastname
    </div>
  );
}

function PersonTable({ list, dispatch, filters }) {
  return (
    <div>
      <Table bordered striped>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>lastName</th>
            <th>mobile</th>
            <th>Email</th>
            <th>PinCode</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list
            .filter((item) => item.firstName.includes(filters.search))
            .map((person, index) => {
              return (
                <tr>
                  <td>{person.firstName}</td>
                  <td>{person.lastName}</td>
                  <td>{person.mobile}</td>
                  <td>{person.email}</td>
                  <td>{person.pinCode}</td>
                  <td>
                    <button
                      onClick={() =>
                        dispatch({ type: "DELETE_ITEM", id: person.id })
                      }
                    >
                      Delete
                    </button>
                    <button
                      onClick={() =>
                        dispatch({ type: "EDIT_ITEM", payload: person })
                      }
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}

function searchReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FILTER":
      return {
        ...state,
        filters: action.filter,
      };
    case "UPDATE_PERSONS":
      return { state };
    case "DELETE_ITEM":
      return {
        ...state,
        persons: state.persons.filter((item) => item.id !== action.id),
      };
    case "ADD_ITEM":
      return { ...state, persons: [...state.persons, action.person] };
    case "EDIT_ITEM":
      return { ...state, editItem: action.payload };
    case "UPDATE_ITEM": {
      const findExistingIndex = state.persons.findIndex(
        (item) => item.id === action.person.id
      );
      const cpersons = [...state.persons];
      if (findExistingIndex >= 0) {
        cpersons[findExistingIndex] = action.person;
      }
      return { ...state, persons: cpersons, editItem: null };
    }
    case "CANCEL_EDIT":
      return { ...state, editItem: null };
    default:
      return state;
  }
  return state;
}

export default function ListWrapper() {
  const [listState, dispatch] = React.useReducer(searchReducer, {
    filters: {
      search: "",
      searchBy: "",
    },
    persons: [],
    editItem: null,
  });

  return (
    <div>
      <code
        style={{
          height: "200px",
          overflow: "auto",
          wordWrap: "break-word",
          border: "1px solid grey",
        }}
      >
        {JSON.stringify(listState)}
      </code>
      <Filters dispatch={dispatch} />
      <Row>
        <Col sm={4}>
          <PersonForm dispatch={dispatch} person={listState.editItem} />
        </Col>
        <Col sm={8}>
          <PersonTable
            list={listState.persons}
            filters={listState.filters}
            dispatch={dispatch}
          />
        </Col>
      </Row>
    </div>
  );
}

//Add Edit functionality
// Add SearchBy options like search by firstName ,lastName , mobile etc (search should be working on multiple fields)
