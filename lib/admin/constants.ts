import {
  Contact,
  DollarSignIcon,
  LayoutDashboard,
  Shapes,
  ShoppingBag,
  Tag,
  UsersRound,
} from "lucide-react";

const HOST = process.env.NEXT_HOST as string
const BASE_ADMIN_URL = "/admin";
export const navLinks = [
  {
    url: BASE_ADMIN_URL + "/dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    url: BASE_ADMIN_URL + "/product",
    icon: Tag,
    label: "Products",
  },
  {
    url: BASE_ADMIN_URL + "/category",
    icon: Shapes,
    label: "Category",
  },
  {
    url: BASE_ADMIN_URL + "/order",
    icon: ShoppingBag,
    label: "Orders",
    children: [
      {
        url: BASE_ADMIN_URL + "/payment",
        icon: DollarSignIcon,
        label: "Payment",
      }
    ]
  },
  {
    url: BASE_ADMIN_URL + "/customer",
    icon: UsersRound,
    label: "Customers",
  },
  {
    url: BASE_ADMIN_URL + "/contact",
    icon: Contact,
    label: "Contact",
  }
];

export const enum ActionTypes {
  EDIT = "Edit",
  DELETE = "Delete",
  CREATE = "Create",
}

export enum StatusType {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export enum StatusOrder {
  PENDING = 'pending',
  DONE = 'done',
  CANCELED = 'cancelled',
  SHIPPING = 'shipping',
}

export enum Schemas {
  PRODUCT = "product",
  CATEGORY = "category",
  ORDER = "order",
  CUSTOMER = "customer",
}

export const LIMIT_PER_PAGE = 10;

export enum QueryAction {
  SEARCH = "search",
  FILTER = "filter",
}

export interface IMeta {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  totalPages: number;
}

export interface ILinks {
  first: string;
  previous: string;
  next: string;
  last: string;
}


export const convertLinks = (schema: Schemas, links: ILinks, action: string = QueryAction.SEARCH): ILinks => {

  const convertLink = (url: string): string => {
    const urlParams = new URL(url);
    const page = urlParams.searchParams.get('page') || '1';
    const limit = urlParams.searchParams.get('limit') || `${LIMIT_PER_PAGE}`;
    const query = urlParams.searchParams.get('query') || '';
    const status = urlParams.searchParams.get('status') || '';
    const category = urlParams.searchParams.get('category') || '';
    const statusOrder = urlParams.searchParams.get('statusOrder') || '';

    if (action == QueryAction.SEARCH) {
      return `${HOST}/${schema}?action=${action}&query=${query}&limit=${limit}&page=${page}`
    }

    if (action == QueryAction.FILTER && schema == Schemas.PRODUCT) {
      return `${HOST}/${schema}?action=${action}&status=${status}&category=${category}&limit=${limit}&page=${page}`
    } else if (action == QueryAction.FILTER && schema == Schemas.ORDER) {
      return `${HOST}/${schema}?action=${action}&statusOrder=${statusOrder}&limit=${limit}&page=${page}`
    } else {
      return `${HOST}/${schema}?action=${action}&status=${status}&limit=${limit}&page=${page}`
    }
  };

  return {
    first: convertLink(links.first),
    previous: convertLink(links.previous),
    next: convertLink(links.next),
    last: convertLink(links.last)
  };
};
