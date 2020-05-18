import { get, post, put, del } from "@/utils/request";

class Category {
  // 新增分类
  async createCategory(category) {
    const res = await post("/category/save", category);
    return res;
  }

  // 编辑分类
  async updateCategory(category) {
    const res = await put("/category/update", category);
    return res;
  }

  // 获取所有分类
  async getCategories() {
    const res = await get("/category/list");
    return res;
  }

  //搜索分类
  async searchCategories(val) {
    return await get(`/category/search/${val}`);
  }
  //分页获取分类
  async getTagPage(current, size) {
    const res = await get(`/category/page/${current}/${size}`);
    return res;
  }

  // 删除某个分类
  async deleteCategory(id) {
    const res = await del(`/category/delete/${id}`);
    return res;
  }
}
export default new Category();
