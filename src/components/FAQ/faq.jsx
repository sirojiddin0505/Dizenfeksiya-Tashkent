import './faq.css'
import { useTranslation } from "react-i18next";
import AccordionExample from './INdex';

function Faq() {
    const {t} = useTranslation()
  return (
    <section className='faq bg-white border'>
        <div className="container faq__container">

            <div className="faq__left">
                <h2 className="faq__title">{t("FAQ")}</h2>
            </div>

            <AccordionExample />

        </div>
    </section>
  );
}
export default Faq