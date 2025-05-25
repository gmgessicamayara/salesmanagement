package io.github.gmgessicamayara.vendasapi.rest.sales;

import io.github.gmgessicamayara.vendasapi.model.Sale;
import io.github.gmgessicamayara.vendasapi.repository.ItemSaleRepository;
import io.github.gmgessicamayara.vendasapi.repository.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/sales")
@CrossOrigin("*")
public class SaleController {

    @Autowired
    private SaleRepository saleRepository;
    @Autowired
    private ItemSaleRepository itemSaleRepository;

    @PostMapping
    @Transactional
    public void save(@RequestBody Sale sale) {
        this.saleRepository.save(sale);
        sale.getItens().stream().forEach(it -> it.setSale(sale));
        itemSaleRepository.saveAll(sale.getItens());
    }

}
