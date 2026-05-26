const ProductTable = ({ products }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow">
      <table className="w-full">
        <thead className="bg-zinc-100">
          <tr>
            <th className="p-4 text-left">Image</th>
            <th className="p-4 text-left">Title</th>
            <th className="p-4 text-left">Price</th>
            <th className="p-4 text-left">Stock</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="p-4">
                <img
                  src={product.image}
                  alt=""
                  className="w-16 h-16 rounded object-cover"
                />
              </td>

              <td className="p-4">{product.title}</td>
              {/* <td className="p-4"><p>₹{product.price}</p></td> */}
              <td className="p-4">{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
