// import axios from "axios";

// export const getDataRequest = () => {
//     // return async () => {
//     //     const fetchData = async () => {
//     //         const response  = await fetch("https://kharj.inlinez.net/api/index")
//     //         if(response.status === false) {
//     //             throw new Error('Could not fetch data!');
//     //         };
//     //         const data = response.json();
//     //         console.log("d=>", data);
//     //         return data;
//     //     };
//     //     try {
//     //         const cc = await fetchData();
//     //         console.log("cc", cc);
//     //     } catch(error) {
//     //         console.log("ee", error);
//     //     }
//     // };   
//     axios
//     .get("https://kharj.inlinez.net/api/index")
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
//     };