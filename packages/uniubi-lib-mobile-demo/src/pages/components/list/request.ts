export const getPageSearchApi = async ({ page, pageSize, searchKey }) => {
  const resp: any = await new Promise((resolve) => {
    setTimeout(() => {
      const dataSource: any = [];
      if (searchKey) {
        for (let i = 0; i < 30; i++) {
          const id = (page - 1) * pageSize + i + 1;
          dataSource.push({ id, name: `id: ${id}` });
        }
      } else {
        for (let i = 0; i < pageSize; i++) {
          const id = (page - 1) * pageSize + i + 1;
          dataSource.push({ id, name: `id: ${id}` });
        }
      }

      const searchList = searchKey
        ? dataSource?.filter((item) => item.name.includes(searchKey))
        : dataSource;
      resolve({
        data: {
          list: searchList,
          total: searchKey ? searchList?.length : 30,
        },
      });
    }, 1000);
  });
  return resp || {};
};

export const getSingleListApi = async () => {
  const resp: any = await new Promise((resolve) => {
    setTimeout(() => {
      const dataSource: any = [];
      for (let i = 0; i < 12; i++) {
        const id = i + 1;
        dataSource.push({ id, name: `id: ${id}` });
      }
      resolve({
        data: dataSource,
      });
    }, 1000);
  });
  return resp || {};
};
