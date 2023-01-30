import './sources.css';
import { ISources, ISource } from '../../app/interfaces';

class Sources implements ISource {
    draw(data: ISources[]): void {
        const fragment = document.createDocumentFragment();

        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item: ISources) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            const SourceItemName = sourceClone.querySelector('.source__item-name') as HTMLElement;
            SourceItemName.textContent = item.name;

            const SourceItem = sourceClone.querySelector('.source__item') as HTMLElement;
            SourceItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources')!.append(fragment);
    }
}

export default Sources;
