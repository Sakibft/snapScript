 
 
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// const Table = () => {
//   const [fetured,setFeatured]=useState();
//   console.log(fetured);
//   useEffect(()=>{
//     axios('https://b9a11-server.vercel.app/featured')
//     .then(res => {
//       // console.log(res.data);
//       setFeatured(res.data)
//     })
//     .then(error => {
//       console.log(error);
//     })
//   },[])
//   return (
//     <div>
//    <div>
//       <div className="w-[60%] border-t border-b rounded-2xl border-primary mx-auto mt-6 mb-4">
//       <div className="overflow-x-auto">
//         <table className="table table-zebra">
//           {/* head */}
//           <thead>
//             <tr>
//               <th></th>
//               <th>Image</th>
//               <th>Blog Owner</th>
//               <th>Blog title</th>
//             </tr>
//           </thead>
//           <tbody>
//             row 1
//             {
//               fetured && fetured.map((item,index) => (
//                 <tr key={item._id}>
//                 <th>{index + 1}</th>
//                 <td>
//                   <div className="avatar">
//                     <div className="w-12 rounded-full">
//                       <img src={item.ownerPhoto} />
//                     </div>
//                   </div>
//                 </td>
//                 <td>{item.owner}</td>
//                 <td>{item.title}</td>
//               </tr>
//               ))
//             }
           
//           </tbody>
//         </table>
//       </div>
//     </div>
//     </div>
//     </div>
//   );
// };

// export default Table;






import React, { useEffect, useState } from 'react';
import { useReactTable, getCoreRowModel } from '@tanstack/react-table';
import axios from 'axios';

const Table = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    axios('https://b9a11-server.vercel.app/featured')
      .then(res => {
        setFeatured(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: '',
        accessorKey: 'index',
      },
      {
        Header: 'Image',
        accessorKey: 'ownerPhoto',
        Cell: ({ cell }) => (
          <img src={cell.value} alt="Owner" className="w-12 rounded-full" />
        ),
      },
      {
        Header: 'Blog Owner',
        accessorKey: 'owner',
      },
      {
        Header: 'Blog Title',
        accessorKey: 'title',
      },
    ],
    []
  );

  const data = React.useMemo(
    () =>
      featured.map((item, index) => ({
        index: index + 1,
        ownerPhoto: item.ownerPhoto,
        owner: item.owner,
        title: item.title,
      })),
    [featured]
  );

  const tableInstance = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-[60%] border-t border-b rounded-2xl border-primary mx-auto mt-6 mb-4">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              {tableInstance.headerGroups[0]?.headers.map(column => (
                <th key={column.id}>{column.render('Header')}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableInstance.rows.map(row => {
              return (
                <tr key={row.id} {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <td key={cell.id}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;


