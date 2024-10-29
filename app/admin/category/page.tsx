import Loader from "@/components/admin/common/Loader";
import { columns } from "@/components/admin/category/CategoryColumn";
import { convertLinks, LIMIT_PER_PAGE, QueryAction, Schemas, StatusType } from "@/lib/admin/constants";
import categoryService from "@/services/admin/category.service";
import CategoryFilter from "@/components/admin/category/CategoryFilter";
import LayoutTable from "@/components/admin/layout/LayoutTable";
const Category = async (
  {
    searchParams,
  }: {
    searchParams: { [key: string]: string }
  }
) => {
  const { query, status, action, limit, page } = searchParams;
  let categories;

  switch (action) {
    case QueryAction.FILTER:
      const filter = {
        status: status || 'active',
      }
      categories = await categoryService.filterCategories(filter.status, parseInt(page) || 1, parseInt(limit) || LIMIT_PER_PAGE);
      break;
    case QueryAction.SEARCH:
      categories = await categoryService.searchCategories(query, parseInt(page) || 1, parseInt(limit) || LIMIT_PER_PAGE);
      break;
    default:
      categories = await categoryService.getCategories(parseInt(page) || 1, parseInt(limit) || LIMIT_PER_PAGE);
      break;
  }

  if (categories?.links) {
    categories.links = convertLinks(
      Schemas.CATEGORY,
      categories.links,
      action || '',
    )
  }

  const [countActive, countInactive] = await Promise.all([
    categoryService.countCategories(StatusType.ACTIVE),
    categoryService.countCategories(StatusType.INACTIVE),
  ]);

  if (countActive?.message || countInactive?.message) {
    return <Loader />;
  }

  const counts = {
    all: categories?.meta?.totalItems || 0,
    active: countActive || 0,
    inactive: countInactive || 0
  }
  const categoryFilter = (categories && countActive) ?
    <CategoryFilter counts={counts} /> :
    (<></>);
  return categories ? (
    <LayoutTable schemaName={Schemas.CATEGORY} filterComponent={categoryFilter} columns={columns} response={categories} createLink={`/${Schemas.CATEGORY}/new`} />
  ) : (<Loader />);
};

export default Category;