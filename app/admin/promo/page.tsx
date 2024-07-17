import AdminEventList from "@/components/pages/admin/admin-event-list"

const AdminPromoPage = () => {
  return (
    <div className="w-full flex flex-col px-5 md:px-10 py-5 gap-10">
      <h1 className="font-bold text-2xl">Your Events Voucher</h1>
      <AdminEventList />
    </div>
  )
}

export default AdminPromoPage