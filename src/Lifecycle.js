import React  from 'react';


        function TableRow ({data,type}) {
        return (
            <tr className="name">
                {
                    data.map((text,i) => {
                        text = text.toString()
                    return type === 'head' ? <th key={i}>{text}</th> : <th key={i}>{text}</th>
                    })
                }
            </tr>
          )
        }
export default TableRow;