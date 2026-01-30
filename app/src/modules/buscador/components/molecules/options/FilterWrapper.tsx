import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/src/globals/components/UI/accordion';

const FilterWrapper = ({titulo, children}: {titulo: string; children: React.ReactNode}) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem className='border-b!' value={titulo}>
        <AccordionTrigger className='py-2 mb-2'> {titulo}</AccordionTrigger>
        <AccordionContent className='mb-4'>
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default FilterWrapper