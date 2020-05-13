import React from 'react';

const Filters = ({
  handleSearchContacts, 
  handleSortContacts,
  handleSortContactsAdmissionDate}) => {

		return (
      <div className="container" data-testid="filters">
        <section className="filters">
          <div className="filters__search">
            
            <input 
              type="text" 
              className="filters__search__input" 
              placeholder="Pesquisar"
              onChange={handleSearchContacts} />
            <button className="filters__search__icon">
              <i className="fa fa-search"/>
            </button>
          </div>

          <button 
            className="filters__item"
            onClick={ () => handleSortContacts('name')}>
            Nome
          </button>

          <button 
            className="filters__item"
            onClick={ () => handleSortContacts('country')}>
            País
          </button>

          <button 
            className="filters__item"
            onClick={ () => handleSortContacts('company')}>
            Empresa
          </button>

          <button 
            className="filters__item"
            onClick={ () => handleSortContacts('department')}>
            Departamento
          </button>

          <button 
            className="filters__item"
            onClick={ () => handleSortContactsAdmissionDate('admissionDate')}>
            Data de admissão
          </button>

        </section>
      </div>
    );
}

export default Filters;