import Header from "@/app/components/Header";
import HOAResponsibilities from "../service-list/HOAResponsibilities";
import RentalPropertyManagement from "../service-list/RentalPropertyManagement";
import CommercialResponsibilities from "../service-list/CommercialResponsibilities";
import SalesAndLeasing from "../service-list/SalesAndLeasing";
import TitleDeedServices from "../service-list/TitleDeedServices";

async function ServiceDetail({ params }) {
  const { title } = await params;
  // const list = {
  //   "hoa-management": "Homeowners Association (HOA) Responsibilities",
  //   "rental-property-management": "Rental Property Management",
  //   "commercial-property-management": "Commercial Property Management",
  //   "property-sales-leasing": "Property Sales Leasing",
  //   "title-deed-services": "Title Deed Services",
  // };
  const renderContent = (title) => {
    switch (title) {
      case "hoa-management":
        return <HOAResponsibilities />;
      case "rental-property-management":
        return <RentalPropertyManagement />;
      case "commercial-property-management":
        return <CommercialResponsibilities />;
      case "property-sales-leasing":
        return <SalesAndLeasing />;
      case "title-deed-services":
        return <TitleDeedServices />;
      default:
        return (
          <div className="text-center text-red-600 text-xl py-10">
            Service not found
          </div>
        );
    }
  };

  return (
    <div>
      <Header page="Our Services" />
      {renderContent(title)}
    </div>
  );
}

export default ServiceDetail;
