import Link from "next/link";

interface PaginationProps {
  meta: {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    totalPages: number;
  };
  links: {
    first: string;
    previous: string;
    next: string;
    last: string;
  };
}

const Pagination: React.FC<PaginationProps> = ({ meta, links }) => {
  const { currentPage, totalPages } = meta;

  // Function to replace the page number in the URL
  const getPageUrl = (url: string, page: number) => {
    const urlObj = new URL(url);
    urlObj.searchParams.set("page", page.toString());
    return urlObj.toString();
  };

  const baseUrl = links.first;

  return (
    <div className="flex items-center justify-center space-x-2 my-4">
      <Link
        className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-300 disabled:opacity-50' : 'bg-black text-white'} `}
        href={links.previous}
        aria-disabled={currentPage === 1}
      >
        Previous
      </Link>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <Link
          key={page}
          className={`px-3 py-1 rounded ${page === currentPage ? 'bg-black text-white' : 'bg-gray-200'}`}
          href={getPageUrl(baseUrl, page)}
        >
          {page}
        </Link>
      ))}
      <Link
        className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-300 disabled:opacity-50' : 'bg-black text-white'}`}
        href={links.next}
        aria-disabled={currentPage === totalPages}
      >
        Next
      </Link>
    </div>
  );
};

export default Pagination;
