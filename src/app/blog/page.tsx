import Card from "../components/Card";

const AllBlogs = () => {
  return (
    <div className="container mx-auto pl-8">
      <div className="flex justify-center text-2xl font-bold mt-12">
        <h1>ALL BLOGS</h1>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default AllBlogs;
